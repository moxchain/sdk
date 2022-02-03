import { TypeRegistry } from '@substrate/txwrapper-core'

export interface TransactionInfo {
  address: string
  blockHash: string
  blockNumber: number
  eraPeriod: number
  genesisHash: string
  metadataRpc: `0x${string}`
  nonce: number
  specVersion: number
  tip: number
  transactionVersion: number
}

export interface TransactionOptions {
  metadataRpc: `0x${string}`
  registry: TypeRegistry
}
