export interface BalancesHandler {
  get: (accountId: string) => Promise<number>
  transfer: (amount: number, to: string) => Promise<number>
}
