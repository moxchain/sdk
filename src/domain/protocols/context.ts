import { UnsignedTransaction } from '@substrate/txwrapper-core'

export interface ContextHandler {
  // Identifier has an limit of number equal to 1_000_000_000
  createContext: (identifier: string, era: number) => Promise<UnsignedTransaction>
  transferContext: (params: {
    contextId: string
    to: string
  }, era: number) => Promise<UnsignedTransaction>
}
