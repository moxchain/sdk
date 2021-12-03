import { Registry } from '@/modules/registry'
import { Account } from '@/modules/account'
import { Node } from '@/modules/node'
import { Rpc } from '@/infra/rpc'
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

  const account = new Account(registry)
  const modules = {
    node,
    registry,
    account
  }

  return modules
}
