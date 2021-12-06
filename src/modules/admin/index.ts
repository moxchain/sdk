import { AccountHandler } from '@/domain/protocols/account'
import { AdminHandler } from '@/domain/protocols/admin'
import { RpcHandler } from '@/domain/protocols/rpc'

export class Admin implements AdminHandler {
  private id: string

  constructor (
    private readonly account: AccountHandler,
    private readonly rpc: RpcHandler
  ) {}

  async save () {
    const publicKey = this.account.publicKey()
    const account = await this.rpc.post('add', {
      address: publicKey
    })
    this.id = account.id
    return account.id as string
  }

  enableId (id) {
    this.id = id
  }

  async setWebhook (url) {
    if (!this.id) throw new Error('ID not initialized')
    const urlSet = await this.rpc.post('setWebhook', {
      id: this.id,
      url
    }) as boolean
    return urlSet
  }
}
