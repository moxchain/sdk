import { UnsignedTransaction } from '@substrate/txwrapper-core'

interface ActorParams {
  identifier: number
  commonType: number
  contextId: string
  availableToSale: boolean
  price: number | null
}

interface ActorAttributeParams {
  identifier: number
  val: number
  mutable: boolean
  actorId: string
  contextId: string
}
export interface ActorHandler {
  createActor: (actor: ActorParams, era: number) => Promise<UnsignedTransaction>
  createActorAttribute: (attribute: ActorAttributeParams, era: number) => Promise<UnsignedTransaction>
}
