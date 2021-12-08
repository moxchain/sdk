import { ItemHandler } from '@/domain/protocols/item'
import { TypeRegistry } from '@substrate/txwrapper-core'
import { TransactionHandler } from '@/domain/protocols/transaction'
import { createItem as methodCreateItem } from '@/methods/item/createItem'
import { createItemAction as methodCreateItemAction } from '@/methods/item/createItemAction'

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
}
