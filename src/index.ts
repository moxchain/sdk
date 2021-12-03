import { Registry } from '@/modules/registry'
import { Account } from '@/modules/account'
import { Node } from '@/modules/node'
import { Rpc } from '@/infra/rpc'
import { Context } from '@/modules/context'
import { Transaction } from '@/modules/transaction'
import { Author } from '@/modules/author'
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

  const modules = {
    node,
    registry,
    account,
    context,
    transaction,
    author
  }

  return modules
}
