import { ItemHandler } from '@/domain/protocols/item'
import { TypeRegistry } from '@substrate/txwrapper-core'
import { TransactionHandler } from '@/domain/protocols/transaction'
import { createItem as methodCreateItem } from '@/methods/item/createItem'
import { createItemAction as methodCreateItemAction } from '@/methods/item/createItemAction'
import { changeItemSaleStatus as methodChangeItemSaleStatus } from '@/methods/item/changeItemSaleStatus'
import { buyItem as methodBuyItem } from '@/methods/item/buyItem'
import { transferItem as methodTransferItem } from '@/methods/item/transferItem'
import { consumeItem as methodConsumeItem } from '@/methods/item/consumeItem'

export class Item implements ItemHandler {
  constructor (
    private readonly metadataRpc: string,
    private readonly registry: TypeRegistry,
    private readonly transaction: TransactionHandler
  ) {}

  async createItem (item, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodCreateItem(
      {
        ...item
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return unsigned
  }

  async createItemAction (action, era) {
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

  async changeItemSaleStatus (saleStatus, era) {
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

  async buyItem (buy, era) {
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

  async transferItem (transfer, era) {
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

  async consumeItem (consume, era) {
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
