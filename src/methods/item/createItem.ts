import {
  Args,
  BaseTxInfo,
  defineMethod,
  OptionsWithMeta,
  UnsignedTransaction
} from '@substrate/txwrapper-core'

// https://polkadot.js.org/docs/api/examples/promise/typegen/
export interface CreateItemArgs extends Args {
  identifier: number
  contextId: string
  totalSupply: number
  unitPrice: number
  availableToSale: boolean
}

// Define the method
export function createItem (
  args: CreateItemArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return defineMethod(
    {
      method: {
        args,
        name: 'createItem',
        pallet: 'mox'
      },
      ...info
    },
    options
  )
}
