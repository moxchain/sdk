import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface ChangeItemSaleStatusArgs extends Args {
  itemId: string
  unitPrice: number
  availableToSale: boolean
}

// Define the method
export function changeItemSaleStatus (
  args: ChangeItemSaleStatusArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'changeItemSaleStatus',
        pallet: 'item'
      },
      ...info
    },
    options
  )
}
