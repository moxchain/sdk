import { NodeHandler } from '@/domain/protocols/node'
import { AccountHandler } from '@/domain/protocols/account'

import { TransactionHandler } from '@/domain/protocols/transaction'
import { decode, TypeRegistry, construct } from '@substrate/txwrapper-core'
import { TransactionInfo } from '@/domain/models/transaction'

export class Transaction implements TransactionHandler {
  constructor (
    private readonly metadataRpc: `0x${string}`,
    private readonly registry: TypeRegistry,
    private readonly node: NodeHandler,
    private readonly account: AccountHandler,
    private readonly specVersion: number,
    private readonly transactionVersion: number
  ) {}

  async constructInfo (era: number) {
    const block = await this.node.block()
    const publicKey = this.account.publicKey()
    const nonce = await this.account.getNonce()
    const genesisHash = await this.node.genesis()

    const transactionInfo: TransactionInfo = {
      address: publicKey,
      blockHash: block.hash,
      blockNumber: block.header.number as any,
      eraPeriod: era,
      genesisHash: genesisHash,
      metadataRpc: this.metadataRpc,
      nonce,
      specVersion: this.specVersion,
      transactionVersion: this.transactionVersion,
      tip: 0
    }
    return transactionInfo
  }

  decodeTx (tx) {
    return decode(tx, {
      metadataRpc: this.metadataRpc,
      registry: this.registry
    })
  }

  signPayload (tx) {
    return construct.signingPayload(tx, {
      registry: this.registry
    })
  }

  constructSignedTx (tx, signature) {
    return construct.signedTx(tx, signature, {
      metadataRpc: this.metadataRpc,
      registry: this.registry
    })
  }

  calculateTxHash (tx) {
    return construct.txHash(tx)
  }
}
