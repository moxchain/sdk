import { Rpc } from './infra/rpc'
import {
  Account,
  Admin,
  Author,
  Context,
  Node,
  Registry,
  Transaction
} from './modules'
import { createMetadata, TypeRegistry } from '@substrate/txwrapper-core'
import { NodeHandler } from './domain/protocols/node'
import { AccountHandler } from './domain/protocols/account'
import { ContextHandler } from './domain/protocols/context'
import { TransactionHandler } from './domain/protocols/transaction'
import { AdminHandler } from './domain/protocols/admin'
import { AuthorHandler } from './domain/protocols/author'
import { cryptoWaitReady } from '@polkadot/util-crypto'
interface InitializeParams {
  serviceUrl: string
  network: 'aquarium'
}

export interface Modules {
  node: NodeHandler
  registry: TypeRegistry
  account: AccountHandler
  context: ContextHandler
  transaction: TransactionHandler
  author: AuthorHandler
  admin: AdminHandler
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
  const author = new Author(rpc)
  const admin = new Admin(account, rpc)

  await cryptoWaitReady()

  const modules = {
    node,
    registry,
    account,
    context,
    transaction,
    author,
    admin
  }

  return modules
}
