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

interface ItemSaleStatusParams {
  itemId: string
  unitPrice: number
  availableToSale: boolean
}

interface BuyItemParams {
  itemId: string
  amount: number
}
export interface ItemHandler {
  createItem: (item: ItemParams, era: number) => Promise<UnsignedTransaction>
  createItemAction: (action: ItemActionParams, era: number) => Promise<UnsignedTransaction>
  changeItemSaleStatus: (saleStatus: ItemSaleStatusParams, era: number) => Promise<UnsignedTransaction>
  buyItem: (buy: BuyItemParams, era: number) => Promise<UnsignedTransaction>
}
