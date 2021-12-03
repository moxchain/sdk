import { UnsignedTransaction } from '@substrate/txwrapper-core'

export interface ContextHandler {
  createContext: (identifier: string, era: number) => Promise<UnsignedTransaction>
}
