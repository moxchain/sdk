import { UnsignedTransaction } from '@substrate/txwrapper-core'

interface ItemParams {
  identifier: number
  contextId: string
  totalSupply: number
  unitPrice: number
  availableToSale: boolean
}

interface ItemActionParams {
  itemId: string
  targetCommonType: number
  actorAttributeIndex: number
  operation: boolean
  amount: number
}

interface ItemSaleStatus {
  itemId: string
  unitPrice: number
  availableToSale: boolean
}
export interface ItemHandler {
  createItem: (item: ItemParams, era: number) => Promise<UnsignedTransaction>
  createItemAction: (action: ItemActionParams, era: number) => Promise<UnsignedTransaction>
  changeItemSaleStatus: (saleStatus: ItemSaleStatus, era: number) => Promise<UnsignedTransaction>
}
