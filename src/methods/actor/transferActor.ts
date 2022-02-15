import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface TransferActorArgs extends Args {
  actorId: string
  to: string
}

// Define the method
export function transferActor (
  args: TransferActorArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'transferActorTo',
        pallet: 'actor'
      },
      ...info
    },
    options
  )
}
