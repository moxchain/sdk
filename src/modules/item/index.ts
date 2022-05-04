import { ItemHandler, ItemParams, ItemActionParams, ItemSaleStatusParams, BuyItemParams, TransferItemParams, ConsumeItemParams, RemoveItemActionParams, IncreaseSupplyParams, DecreaseSupplyParams } from '@/domain/protocols/item'
import { TypeRegistry } from '@substrate/txwrapper-core'
import { TransactionHandler } from '@/domain/protocols/transaction'
import { createItem as methodCreateItem } from '@/methods/item/createItem'
import { increaseItemSupply as methodIncreaseItemSupply } from '@/methods/item/increaseItemSupply'
import { decreaseItemSupply as methodDecreaseItemSupply } from '@/methods/item/decreaseItemSupply'
import { createItemAction as methodCreateItemAction } from '@/methods/item/createItemAction'
import { removeItemAction as methodRemoveItemAction } from '@/methods/item/removeItemAction'
import { changeItemSaleStatus as methodChangeItemSaleStatus } from '@/methods/item/changeItemSaleStatus'
import { buyItem as methodBuyItem } from '@/methods/item/buyItem'
import { transferItem as methodTransferItem } from '@/methods/item/transferItem'
import { consumeItem as methodConsumeItem } from '@/methods/item/consumeItem'
import { blake2AsHex } from '@/util'

export class Item implements ItemHandler {
  constructor (
    private readonly metadataRpc: `0x${string}`,
    private readonly registry: TypeRegistry,
    private readonly transaction: TransactionHandler
  ) {}

  async createItem (item: ItemParams, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const publicKey = transactionInfo.address
    const contextId = item.contextId
    const identifier = item.identifier
    const itemId = blake2AsHex(`${publicKey}${contextId}${identifier}`)
    const unsigned = methodCreateItem(
      {
        availableToSale: item.availableToSale,
        contextId: item.contextId,
        identifier: itemId,
        totalSupply: item.totalSupply,
        unitPrice: item.unitPrice
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return {utx: unsigned, itemId}
  }

  async increaseItemSupply (supply: IncreaseSupplyParams, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodIncreaseItemSupply(
      {
        ...supply
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return unsigned
  }

  async decreaseItemSupply (supply: DecreaseSupplyParams, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodDecreaseItemSupply(
      {
        ...supply
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return unsigned
  }

  async createItemAction (action: ItemActionParams, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodCreateItemAction(
      {
        ...action
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return unsigned
  }

  async removeItemAction (action: RemoveItemActionParams, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodRemoveItemAction(
      {
        ...action
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return unsigned
  }

  async changeItemSaleStatus (saleStatus: ItemSaleStatusParams, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodChangeItemSaleStatus(
      {
        ...saleStatus
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return unsigned
  }

  async buyItem (buy: BuyItemParams, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodBuyItem(
      {
        ...buy
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return unsigned
  }

  async transferItem (transfer: TransferItemParams, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodTransferItem(
      {
        ...transfer
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return unsigned
  }

  async consumeItem (consume: ConsumeItemParams, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodConsumeItem(
      {
        ...consume
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return unsigned
  }
}
