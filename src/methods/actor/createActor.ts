import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/

export interface CreateActorArgs extends Args {
  to: string,
  identifier: string
  commonType: number
  contextId: string
  availableToSale: boolean
  price?: number
}

// Define the method
export function createActor (
  args: CreateActorArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'createActor',
        pallet: 'actor'
      },
      ...info
    },
    options
  )
}
