import { stringToU8a, hasBigInt, u8aToU8a, u8aToHex } from '@polkadot/util'
import { blake2b, isReady } from '@polkadot/wasm-crypto';
import { blake2b as blake2bJs } from '@noble/hashes/blake2b'

const createAsHex = (fn: any) => {
  return (...args) => u8aToHex(fn(...args))
} 

const blake2AsU8a = (data: any, bitLength = 256, key: any, onlyJs: any) => {
  const byteLength = Math.ceil(bitLength / 8);
  const u8a = u8aToU8a(data);
  return !hasBigInt || !onlyJs && isReady() ? blake2b(u8a, u8aToU8a(key), byteLength) : blake2bJs(u8a, {
    dkLen: byteLength,
    key: key || undefined
  });
}

export const blake2AsHex = createAsHex(blake2AsU8a);