import { StorageHandler } from '@/domain/protocols/storage'
import { RpcHandler } from '@/domain/protocols/rpc'

export class Storage implements StorageHandler {
  constructor (
    private readonly rpc: RpcHandler
  ) {}

  async getContext (contextHash: string): Promise<{
    identifier: number
    owner: string
  }> {
    const resp = await this.rpc.get(`storage/getContext/${contextHash}`)
    if (!resp) throw new Error('Not found')
    return resp
  }

  async getActor (actorHash: string): Promise<{
    identifier: number
    commonType: number
    context: string
    owner: string
    availableToSale: boolean
    price?: number
  }> {
    const resp = await this.rpc.get(`storage/getActor/${actorHash}`)
    if (!resp) throw new Error('Not found')
    return resp
  }

  async getActorAttributes (actorHash: string): Promise<[{
    identifier: number
    val: number
    mutable: number
  }]> {
    const resp = await this.rpc.get(`storage/getActorAttributes/${actorHash}`)
    if (!resp) throw new Error('Not found')
    return resp
  }

  async getItem (itemHash: string): Promise<{
    identifier: number
    context: string
    total_supply: number
    available_supply: number
    owner: string
    unit_price: number
    available_to_sale: boolean
  }> {
    const resp = await this.rpc.get(`storage/getItem/${itemHash}`)
    if (!resp) throw new Error('Not found')
    return resp
  }

  async getItemActions (itemHash: string): Promise<[{
    target_common_type: number
    actor_attribute_index: number
    operation: boolean
    amount: number
  }]> {
    const resp = await this.rpc.get(`storage/getItemActions/${itemHash}`)
    if (!resp) throw new Error('Not found')
    return resp
  }

  async getItemBalances (itemHash: string, accountId: string): Promise<number> {
    const resp = await this.rpc.get(`storage/getItemBalance/${itemHash}/${accountId}`)
    if (!resp) throw new Error('Not found')
    return resp
  }
}
