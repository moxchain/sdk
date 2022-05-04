import { ContextHandler } from '@/domain/protocols/context'
import { TypeRegistry } from '@substrate/txwrapper-core'
import { createContext as methodCreateContext } from '@/methods/context/createContext'
import { transferContext as methodTransferContext } from '@/methods/context/transferContext'
import { blake2AsHex } from '@/util'
import { TransactionHandler } from '@/domain/protocols/transaction'

export class Context implements ContextHandler {
  constructor (
    private readonly metadataRpc: `0x${string}`,
    private readonly registry: TypeRegistry,
    private readonly transaction: TransactionHandler
  ) {}

  async createContext (identifier, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const publicKey = transactionInfo.address;
    const contextId = blake2AsHex(`${publicKey}${identifier}`)
    const unsigned = methodCreateContext({
      identifier: contextId
    },
    transactionInfo,
    {
      metadataRpc: this.metadataRpc,
      registry: this.registry
    }
    )
    return {utx: unsigned, contextId}
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
