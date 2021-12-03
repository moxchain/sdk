export interface AccountHandler {
  createMnemonic: () => string

  setMnemonic: (phrase: string) => void

  setSeed: (seed: string) => void

  mnemonicToSeed: () => string

  enableAccountByMnemonic: () => Promise<void>

  enableAccountBySeed: () => Promise<void>

  publicKey: (ss58: number) => string
}
