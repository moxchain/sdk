import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface RemoveActorAttributeArgs extends Args {
  actorId: string
  actorAttributeId: string
  contextId: string
}

// Define the method
export function removeActorAttribute (
  args: RemoveActorAttributeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'removeActorAttribute',
        pallet: 'actor'
      },
      ...info
    },
    options
  )
}
