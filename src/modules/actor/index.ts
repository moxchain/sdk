import { ActorHandler, ActorParams, ActorAttributeParams, ActorSaleStatusParams, TransferActorParams, RemoveAttributeParams } from '@/domain/protocols/actor'
import { TypeRegistry, UnsignedTransaction } from '@substrate/txwrapper-core'
import { createActor as methodCreateActor } from '@/methods/actor/createActor'
import { createActorAttribute as methodCreateActorAttribute } from '@/methods/actor/createActorAttribute'
import { removeActorAttribute as methodRemoveActorAttribute } from '@/methods/actor/removeActorAttribute'
import { changeActorSaleStatus as methodChangeActorSaleStatus } from '@/methods/actor/changeActorSaleStatus'
import { buyActor as methodBuyActor } from '@/methods/actor/buyActor'
import { transferActor as methodTransferActor } from '@/methods/actor/transferActor'
import { blake2AsHex } from '@polkadot/util-crypto'
import { TransactionHandler } from '@/domain/protocols/transaction'

export class Actor implements ActorHandler {
  constructor (
    private readonly metadataRpc: `0x${string}`,
    private readonly registry: TypeRegistry,
    private readonly transaction: TransactionHandler
  ) {}

  async createActor (actor: ActorParams, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const actorId = blake2AsHex(actor.identifier)
    const unsigned = methodCreateActor(
      {
        availableToSale: actor.availableToSale,
        commonType: actor.commonType,
        contextId: actor.contextId,
        identifier: actorId,
        to: actor.to,
        price: actor.price
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return {utx: unsigned, actorId}
  }

  async createActorAttribute (attribute: ActorAttributeParams, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const attributeId = blake2AsHex(attribute.identifier)
    const unsigned = methodCreateActorAttribute(
      {
        actorAttributeId: attributeId,
        actorId: attribute.actorId,
        contextId: attribute.contextId,
        mutable: attribute.mutable,
        value: attribute.value
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return {utx: unsigned, attributeId}
  }

  async removeActorAttribute (attribute: RemoveAttributeParams, era: number) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodRemoveActorAttribute(
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

  async changeActorSaleStatus (saleStatus: ActorSaleStatusParams, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodChangeActorSaleStatus(
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

  async buyActor (actorId, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodBuyActor(
      {
        actorId
      },
      transactionInfo,
      {
        metadataRpc: this.metadataRpc,
        registry: this.registry
      })
    return unsigned
  }

  async transferActor (transfer: TransferActorParams, era) {
    const transactionInfo = await this.transaction.constructInfo(era)
    const unsigned = methodTransferActor(
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
}
