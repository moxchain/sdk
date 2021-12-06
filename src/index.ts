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
import { createMetadata } from '@substrate/txwrapper-core'
interface InitializeParams {
  serviceUrl: string
  network: 'aquarium'
}

export default async (params: InitializeParams) => {
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
