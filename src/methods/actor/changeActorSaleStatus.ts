import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface ChangeActorSaleStatusArgs extends Args {
  actorId: string
  availableToSale: boolean
  price?: number | null
}

// Define the method
export function changeActorSaleStatus (
  args: ChangeActorSaleStatusArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'changeActorSaleStatus',
        pallet: 'actor'
      },
      ...info
    },
    options
  )
}
