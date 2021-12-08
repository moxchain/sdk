import { ItemHandler } from '@/domain/protocols/item'
import { TypeRegistry } from '@substrate/txwrapper-core'
import { TransactionHandler } from '@/domain/protocols/transaction'
import { createItem as methodCreateItem } from '@/methods/item/createItem'

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
}
