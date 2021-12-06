import { Keyring } from '@polkadot/api'
import { mnemonicGenerate, mnemonicValidate, mnemonicToMiniSecret } from '@polkadot/util-crypto'
import { KeyringPair, deriveAddress, TypeRegistry } from '@substrate/txwrapper-core'
import { u8aToHex, hexToU8a } from '@polkadot/util'
import { AccountHandler } from '@/domain/protocols/account'
import { EXTRINSIC_VERSION } from '@polkadot/types/extrinsic/v4/Extrinsic'
import { RpcHandler } from '@/domain/protocols/rpc'

export class Account implements AccountHandler {
  private readonly keyring = new Keyring({ type: 'sr25519' })
  private mnemonic: string
  private seed: Uint8Array
  private account: KeyringPair

  constructor (
    private readonly registry: TypeRegistry,
    private readonly rpc: RpcHandler
  ) {}

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

  enableAccountByMnemonic () {
    if (!this.mnemonic || this.mnemonic.length < 10) {
      throw new Error('Mnemonic not instantiate')
    }
    this.account = this.keyring.addFromUri(this.mnemonic)
  }

  enableAccountBySeed () {
    if (!this.seed) throw new Error('Seed not instantiate')
    this.account = this.keyring.addFromSeed(this.seed)
  }

  disableAccount () {
    if (!this.account) throw new Error('Account not instantiate')
    this.account = undefined
  }

  publicKey () {
    if (!this.account) throw new Error('Account not instantiate')
    return deriveAddress(this.account.publicKey, this.registry.chainSS58)
  }

  async getNonce () {
    const publicKey = this.publicKey()
    const nonce = await this.rpc.get(`getNonce/${publicKey}`)
    return nonce
  }

  sign (tx) {
    if (!this.account) throw new Error('Account not instantiate')
    const { signature } = this.registry.createType('ExtrinsicPayload', tx, {
      version: EXTRINSIC_VERSION
    }).sign(this.account)
    return signature
  }
}
