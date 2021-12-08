import { UnsignedTransaction } from '@substrate/txwrapper-core'

interface ItemParams {
  identifier: number
  contextId: string
  totalSupply: number
  unitPrice: number
  availableToSale: boolean
}

export interface ItemHandler {
  createItem: (item: ItemParams, era: number) => Promise<UnsignedTransaction>
}
