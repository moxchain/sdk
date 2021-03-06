import { Rpc } from './infra/rpc'
import {
  Account,
  Actor,
  Admin,
  Author,
  Context,
  Node,
  Registry,
  Transaction,
  Item,
  Storage,
  Balances
} from './modules'
import { createMetadata, TypeRegistry } from '@substrate/txwrapper-core'
import { NodeHandler } from './domain/protocols/node'
import { AccountHandler } from './domain/protocols/account'
import { ContextHandler } from './domain/protocols/context'
import { TransactionHandler } from './domain/protocols/transaction'
import { AdminHandler } from './domain/protocols/admin'
import { AuthorHandler } from './domain/protocols/author'
import { ActorHandler } from './domain/protocols/actor'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { ItemHandler } from './domain/protocols/item'
import { StorageHandler } from './domain/protocols/storage'
import { BalancesHandler } from './domain/protocols/balances'
interface InitializeParams {
  serviceUrl: string
  network: 'aquarium' | 'apertio'
}

export {
  UnsignedTransaction
} from '@substrate/txwrapper-core'
export interface Modules {
  node: NodeHandler
  registry: TypeRegistry
  account: AccountHandler
  context: ContextHandler
  transaction: TransactionHandler
  author: AuthorHandler
  admin: AdminHandler
  actor: ActorHandler
  item: ItemHandler
  storage: StorageHandler
  balances: BalancesHandler
}

export default async (params: InitializeParams): Promise<Modules> => {
  const rpc = new Rpc(params.serviceUrl)
  const node = new Node(rpc)

  const metadataRpc = await node.metadata()
  const runtime = await node.runtime()
  const registry = (new Registry()).getRegistry({
    chainName: params.network,
    metadataRpc,
    specName: runtime.specName,
    specVersion: runtime.specVersion,
    properties: undefined
  })

  registry.setMetadata(createMetadata(registry, metadataRpc))

  const account = new Account(registry, rpc)
  const transaction = new Transaction(metadataRpc, registry, node, account, runtime.specVersion, runtime.transactionVersion)
  const context = new Context(metadataRpc, registry, transaction)
  const actor = new Actor(metadataRpc, registry, transaction)
  const item = new Item(metadataRpc, registry, transaction)
  const balances = new Balances(rpc, transaction, registry, metadataRpc)
  const author = new Author(rpc)
  const storage = new Storage(rpc)
  const admin = new Admin(account, rpc)

  await cryptoWaitReady()

  const modules = {
    node,
    registry,
    account,
    context,
    transaction,
    author,
    admin,
    actor,
    item,
    storage,
    balances
  }

  return modules
}
