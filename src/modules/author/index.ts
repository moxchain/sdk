import { RpcHandler } from '@/domain/protocols/rpc'
import { AuthorHandler } from '@/domain/protocols/author'

export class Author implements AuthorHandler {
  constructor (
    private readonly rpc: RpcHandler
  ) {}

  async submitTx (tx) {
    const txHash = await this.rpc.post('submitTx', {
      tx
    })
    return txHash
  }
}
