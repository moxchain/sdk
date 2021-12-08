import { ActorHandler } from '@/domain/protocols/actor'
import { TypeRegistry } from '@substrate/txwrapper-core'
import { createActor as methodCreateActor } from '@/methods/actor/createActor'
import { createActorAttribute as methodCreateActorAttribute } from '@/methods/actor/createActorAttribute'

import { TransactionHandler } from '@/domain/protocols/transaction'

export class Actor implements ActorHandler {
  constructor (
    private readonly metadataRpc: string,
    private readonly registry: TypeRegistry,
    private readonly transaction: TransactionHandler
  ) {}

  async createActor (actor, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodCreateActor(
      {
        ...actor
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return unsigned
  }

  async createActorAttribute (attribute, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodCreateActorAttribute(
      {
        ...attribute
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return unsigned
  }
}
