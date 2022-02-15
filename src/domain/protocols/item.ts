import { UnsignedTransaction } from '@substrate/txwrapper-core'

export interface ItemParams {
  identifier: string
  contextId: string
  totalSupply: number
  unitPrice: number
  availableToSale: boolean
}

export interface IncreaseSupplyParams {
  itemId: string
  to: string
  amount: number
}

export interface DecreaseSupplyParams {
  itemId: string
  amount: number
}


export interface ItemActionParams {
  itemId: string
  actorAttributeId: string
  operation: boolean
  amount: number
}

export interface RemoveItemActionParams {
  itemId: string
  actorAttributeId: string
}


export interface ItemSaleStatusParams {
  itemId: string
  unitPrice: number
  availableToSale: boolean
}

export interface BuyItemParams {
  itemId: string
  seller: string
  amount: number
}

export interface TransferItemParams {
  itemId: string
  amount: number
  to: string
}

export interface ConsumeItemParams {
  itemId: string
  actorId: string
}
export interface ItemHandler {
  createItem: (item: ItemParams, era: number) => Promise<{utx: UnsignedTransaction, itemId: string}>
  increaseItemSupply: (supply: IncreaseSupplyParams, era: number) => Promise<UnsignedTransaction>
  decreaseItemSupply: (supply: DecreaseSupplyParams, era: number) => Promise<UnsignedTransaction>
  createItemAction: (action: ItemActionParams, era: number) => Promise<UnsignedTransaction>
  removeItemAction: (supply: RemoveItemActionParams, era: number) => Promise<UnsignedTransaction>
  changeItemSaleStatus: (saleStatus: ItemSaleStatusParams, era: number) => Promise<UnsignedTransaction>
  buyItem: (buy: BuyItemParams, era: number) => Promise<UnsignedTransaction>
  transferItem: (transfer: TransferItemParams, era: number) => Promise<UnsignedTransaction>
  consumeItem: (consume: ConsumeItemParams, era: number) => Promise<UnsignedTransaction>
}
