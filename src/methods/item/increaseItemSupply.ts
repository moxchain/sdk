import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface IncreaseItemSupplyArgs extends Args {
  itemId: string
  to: string
  amount: number
}

// Define the method
export function increaseItemSupply (
  args: IncreaseItemSupplyArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'increaseItemSupply',
        pallet: 'item'
      },
      ...info
    },
    options
  )
}
