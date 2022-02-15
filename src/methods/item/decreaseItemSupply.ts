import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface DecreaseItemSupplyArgs extends Args {
  itemId: string
  amount: number
}

// Define the method
export function decreaseItemSupply (
  args: DecreaseItemSupplyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'decreaseItemSupply',
        pallet: 'item'
      },
      ...info
    },
    options
  )
}
