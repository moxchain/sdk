import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface RemoveItemActionArgs extends Args {
  itemId: string
  actorAttributeId: string
}

// Define the method
export function removeItemAction (
  args: RemoveItemActionArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'removeItemAction',
        pallet: 'item'
      },
      ...info
    },
    options
  )
}
