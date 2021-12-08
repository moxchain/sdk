import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface BuyItemArgs extends Args {
  itemId: string
  amount: number
}

// Define the method
export function buyItem (
  args: BuyItemArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'buyItem',
        pallet: 'mox'
      },
      ...info
    },
    options
  )
}
