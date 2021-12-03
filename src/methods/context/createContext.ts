import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface CreateContextArgs extends Args {
  /**
   * The recipient address, SS58 encoded.
   */
  identifier: number
}

// Define the method
export function createContext (
  args: CreateContextArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'createContext',
        pallet: 'mox'
      },
      ...info
    },
    options
  )
}
