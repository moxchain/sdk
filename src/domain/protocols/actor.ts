import { UnsignedTransaction } from '@substrate/txwrapper-core'

export interface ActorParams {
  identifier: string
  commonType: number
  contextId: string
  availableToSale: boolean
  to: string
  price: number | null
}

export interface ActorAttributeParams {
  identifier: string
  value: number
  mutable: boolean
  actorId: string
  contextId: string
}

export interface RemoveAttributeParams {
  actorId: string
  actorAttributeId: string
  contextId: string
}

export interface ActorSaleStatusParams {
  actorId: string
  availableToSale: boolean
  price: number | null
}

export interface TransferActorParams {
  actorId: string
  to: string
}
export interface ActorHandler {
  createActor: (actor: ActorParams, era: number) => Promise<{utx: UnsignedTransaction, actorId: string}>
  createActorAttribute: (attribute: ActorAttributeParams, era: number) => Promise<{utx: UnsignedTransaction, attributeId: string}>
  removeActorAttribute: (attribute: RemoveAttributeParams, era: number) => Promise<UnsignedTransaction>
  changeActorSaleStatus: (saleStatus: ActorSaleStatusParams, era: number) => Promise<UnsignedTransaction>
  buyActor: (actorId: string, era: number) => Promise<UnsignedTransaction>
  transferActor: (transfer: TransferActorParams, era: number) => Promise<UnsignedTransaction>
}
