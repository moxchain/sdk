type getMethods =
  | 'getBlock'
  | 'getGenesis'
  | 'metadata'
  | 'runtime'
  | `getNonce/${string}`
  | `storage/getContext/${string}`
  | `storage/getActor/${string}`
  | `storage/getActorAttributes/${string}`
  | `storage/getItem/${string}`
  | `storage/getItemActions/${string}`
  | `storage/getItemBalance/${string}/${string}`
  | `storage/getMoxBalance/${string}`
type postMethods = 'add' | 'submitTx' | 'setWebhook'
export interface RpcHandler {
  get: (method: getMethods, body?: any) => Promise<any>
  post: (method: postMethods, body: any) => Promise<any>
}
