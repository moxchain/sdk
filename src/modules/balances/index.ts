import { BalancesHandler } from '@/domain/protocols/balances'
import { RpcHandler } from '@/domain/protocols/rpc'
import { UnsignedTransaction, TypeRegistry } from '@substrate/txwrapper-core'
import { TransactionHandler } from '@/domain/protocols/transaction'
import { balancesTransfer } from '@/methods/balances/transfer'

export class Balances implements BalancesHandler {
  constructor (
    private readonly rpc: RpcHandler,
    private readonly transaction: TransactionHandler,
    private readonly registry: TypeRegistry,
    private readonly metadataRpc: `0x${string}`
  ) {}

  async get (accountId: string): Promise<string> {
    return await this.rpc.get(`storage/getMoxBalance/${accountId}`)
  }

  async transfer (amount: number, to: string, era): Promise<UnsignedTransaction> {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = balancesTransfer({
      dest: to,
      value: amount
    },
    transactionInfo,
    {
      metadataRpc: this.metadataRpc,
      registry: this.registry
    }
    )
    return unsigned
  }
}
