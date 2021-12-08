import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface TransferContextArgs extends Args {
  contextId: string
  to: string
}

// Define the method
export function transferContext (
  args: TransferContextArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'transferContext',
        pallet: 'mox'
      },
      ...info
    },
    options
  )
}
