import { TypeRegistry } from '@substrate/txwrapper-core'

export interface TransactionInfo {
  address: string
  blockHash: string
  blockNumber: number
  eraPeriod: number
  genesisHash: string
  metadataRpc: string
  nonce: number
  specVersion: number
  tip: number
  transactionVersion: number
}

export interface TransactionOptions {
  metadataRpc: string
  registry: TypeRegistry
}
