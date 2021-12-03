import { TxInfo, UnsignedTransaction } from '@substrate/txwrapper-core'
import { TransactionInfo } from '@/domain/models/transaction'

export interface TransactionHandler {
  constructInfo: (era: number) => Promise<TransactionInfo>
  decodeTx: (tx: UnsignedTransaction | string) => TxInfo
  signPayload: (tx: UnsignedTransaction) => string
  constructSignedTx: (tx: UnsignedTransaction, signature: `0x${string}`) => string
  calculateTxHash: (tx: string) => string
}
