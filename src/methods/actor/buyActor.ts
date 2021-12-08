import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface BuyActorArgs extends Args {
  actorId: string
}

// Define the method
export function buyActor (
  args: BuyActorArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'buyActor',
        pallet: 'mox'
      },
      ...info
    },
    options
  )
}
