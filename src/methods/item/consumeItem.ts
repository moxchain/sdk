import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface ConsumeItemArgs extends Args {
  itemId: string
  actorId: string
}

// Define the method
export function consumeItem (
  args: ConsumeItemArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'consumeItem',
        pallet: 'mox'
      },
      ...info
    },
    options
  )
}
