import { StorageHandler, Context, Actor, ActorAttribute, Item, ItemAction, ItemBalance } from '@/domain/protocols/storage'
import { RpcHandler } from '@/domain/protocols/rpc'

export class Storage implements StorageHandler {
  constructor (
    private readonly rpc: RpcHandler
  ) {}

  async getContext (contextId: string): Promise<Context> {
    const resp = await this.rpc.get(`storage/getContext/${contextId}`)
    if (!resp) throw new Error('Not found')
    return resp
  }

  async getActor (actorId: string): Promise<Actor> {
    const resp = await this.rpc.get(`storage/getActor/${actorId}`)
    if (!resp) throw new Error('Not found')
    return resp
  }

  async getActorAttributes (actorId: string): Promise<string[]> {
    const resp = await this.rpc.get(`storage/getActorAttributes/${actorId}`)
    if (!resp) throw new Error('Not found')
    return resp
  }


  async getActorAttribute (actorId: string, attributeId): Promise<ActorAttribute> {
    const resp = await this.rpc.get(`storage/getActorAttribute/${actorId}/${attributeId}`)
    if (!resp) throw new Error('Not found')
    return resp
  }

  async getItem (itemId: string): Promise<Item> {
    const resp = await this.rpc.get(`storage/getItem/${itemId}`)
    if (!resp) throw new Error('Not found')
    return resp
  }

  async getItemActions (itemId: string): Promise<ItemAction[]> {
    const resp = await this.rpc.get(`storage/getItemActions/${itemId}`)
    if (!resp) throw new Error('Not found')
    return resp
  }

  async getItemBalances (itemId: string, accountId: string): Promise<ItemBalance> {
    const resp = await this.rpc.get(`storage/getItemBalance/${itemId}/${accountId}`)
    if (!resp) throw new Error('Not found')
    return resp
  }

  async getMoxBalance (accountId: string): Promise<string> {
    const resp = await this.rpc.get(`storage/getMoxBalance/${accountId}`)
    if (!resp) throw new Error('Not found')
    return resp
  }
}
