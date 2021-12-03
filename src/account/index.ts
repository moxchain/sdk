import { Keyring } from '@polkadot/api'
import { mnemonicGenerate, mnemonicValidate, mnemonicToMiniSecret, cryptoWaitReady } from '@polkadot/util-crypto'
import { KeyringPair, deriveAddress } from '@substrate/txwrapper-core'
import { u8aToHex, hexToU8a } from '@polkadot/util'

export class Account {
  private readonly keyring = new Keyring({ type: 'sr25519' })
  private mnemonic: string
  private seed: Uint8Array
  private account: KeyringPair

  createMnemonic () {
    this.mnemonic = mnemonicGenerate()
    return this.mnemonic
  }

  setMnemonic (phrase: string) {
    if (!mnemonicValidate(phrase)) {
      throw new Error('Invalid mnemonic')
    }
    this.mnemonic = phrase
  }

  setSeed (seed: string) {
    if (seed.substr(0,2) !== '0x' || seed.length !== 66) throw new Error('Invalid seed')
    this.seed = hexToU8a(seed)
  }

  mnemonicToSeed () {
    if (!this.mnemonic || this.mnemonic.length < 10) {
      throw new Error('Mnemonic not instantiate')
    }
    this.seed = mnemonicToMiniSecret(this.mnemonic)
    return u8aToHex(this.seed)
  }

  async enableAccountByMnemonic () {
    if (!this.mnemonic || this.mnemonic.length < 10) {
      throw new Error('Mnemonic not instantiate')
    }
    await cryptoWaitReady()
    this.account = this.keyring.addFromUri(this.mnemonic)
  }

  async enableAccountBySeed () {
    if (!this.seed) throw new Error('Seed not instantiate')
    await cryptoWaitReady()
    this.account = this.keyring.addFromSeed(this.seed)
  }

  publicKey (ss58: number) {
    if (!this.account) throw new Error('Account not instantiate')
    return deriveAddress(this.account.publicKey, ss58)
  }
}
