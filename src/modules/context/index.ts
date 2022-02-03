import { ContextHandler } from '@/domain/protocols/context'
import { TypeRegistry } from '@substrate/txwrapper-core'
import { createContext as methodCreateContext } from '@/methods/context/createContext'
import { transferContext as methodTransferContext } from '@/methods/context/transferContext'
import { TransactionHandler } from '@/domain/protocols/transaction'

export class Context implements ContextHandler {
  constructor (
    private readonly metadataRpc: `0x${string}`,
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

  async transferContext (params, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodTransferContext({
      ...params
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
