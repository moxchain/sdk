export interface AccountHandler {
  createMnemonic: () => string

  setMnemonic: (phrase: string) => void

  setSeed: (seed: string) => void

  mnemonicToSeed: () => string

  enableAccountByMnemonic: () => Promise<void>

  enableAccountBySeed: () => Promise<void>

  publicKey: () => string

  getNonce: () => Promise<number>

  sign: (tx: string) => `0x${string}`
}
