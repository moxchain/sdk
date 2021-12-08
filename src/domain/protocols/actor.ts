import { UnsignedTransaction } from '@substrate/txwrapper-core'

interface ActorParams {
  identifier: number
  commonType: number
  contextId: string
  availableToSale: boolean
  price: number | null
}

export interface ActorHandler {
  createActor: (actor: ActorParams, era: number) => Promise<UnsignedTransaction>
}
