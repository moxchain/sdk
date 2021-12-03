import { ContextHandler } from '@/domain/protocols/context'
import { TypeRegistry } from '@substrate/txwrapper-core'
import { createContext as methodCreateContext } from '@/methods/context/createContext'
import { TransactionHandler } from '@/domain/protocols/transaction'

export class Context implements ContextHandler {
  constructor (
    private readonly metadataRpc: string,
    private readonly registry: TypeRegistry,
    private readonly transaction: TransactionHandler
  ) {}

  async createContext (identifier, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodCreateContext({
      identifier
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
