import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface CreateActorAttributeArgs extends Args {
  identifier: number
  val: number
  mutable: boolean
  actorId: string
  contextId: string
}

// Define the method
export function createActorAttribute (
  args: CreateActorAttributeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'createActorAttribute',
        pallet: 'mox'
      },
      ...info
    },
    options
  )
}
