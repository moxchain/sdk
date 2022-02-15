
export interface Context {
  owner: string
}

export interface Actor {
  commonType: number
  context: string
  owner: string
  availableToSale: boolean
  price?: number
}

export interface ActorAttribute {
  actorAttributeId: string
  value: number
  mutable: boolean
}

export interface Item {
  context: string
  totalSupply: number
  owner: string
}

export interface ItemAction {
  actorAttributeId: string
  operation: boolean
  amount: number
}

export interface ItemBalance {
  amount: number,
  unitPrice: number,
  availableToSale: boolean,
}
export interface StorageHandler {
  getContext: (contextId: string) => Promise<Context>
  getActor: (actorId: string) => Promise<Actor>
  getActorAttributes: (actorId: string) => Promise<string[]>
  getActorAttribute: (actorId: string, attributeId: string) => Promise<ActorAttribute>
  getItem: (itemId: string) => Promise<Item>
  getItemActions: (itemHash: string) => Promise<ItemAction[]>

  getItemBalances: (itemHash: string, accountId: string) => Promise<ItemBalance>
  getMoxBalance: (accountId: string) => Promise<string>
}
