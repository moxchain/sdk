import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface TransferItemArgs extends Args {
  itemId: string
  amount: number
  to: string
}

// Define the method
export function transferItem (
  args: TransferItemArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'transferItem',
        pallet: 'item'
      },
      ...info
    },
    options
  )
}
