import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface CreateItemActionArgs extends Args {
  itemId: string
  targetCommonType: number
  actorAttributeIndex: number
  operation: boolean
  amount: number
}

// Define the method
export function createItemAction (
  args: CreateItemActionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'createItemAction',
        pallet: 'mox'
      },
      ...info
    },
    options
  )
}
