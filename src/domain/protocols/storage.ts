
export interface StorageHandler {
  getContext: (contextHash: string) => Promise<{
    identifier: number
    owner: string
  }>
  getActor: (actorHash: string) => Promise<{
    identifier: number
    commonType: number
    context: string
    owner: string
    availableToSale: boolean
    price?: number
  }>
  getActorAttributes: (actorHash: string) => Promise<[{
    identifier: number
    val: number
    mutable: number
  }]>
  getItem: (itemHash: string) => Promise<{
    identifier: number
    context: string
    total_supply: number
    available_supply: number
    owner: string
    unit_price: number
    available_to_sale: boolean
  }>
  getItemActions: (itemHash: string) => Promise<[{
    target_common_type: number
    actor_attribute_index: number
    operation: boolean
    amount: number
  }]>

  getItemBalances: (itemHash: string, accountId: string) => Promise<number>
}
