import { UnsignedTransaction } from '@substrate/txwrapper-core'

export interface BalancesHandler {
  get: (accountId: string) => Promise<string>
  transfer: (amount: number, to: string, era: number) => Promise<UnsignedTransaction>
}
