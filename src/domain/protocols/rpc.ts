
type getMethods = 'getBlock' | 'getGenesis' | 'metadata' | 'runtime' | 'getNonce'
type postMethods = 'add' | 'submitTx' | 'setWebhook'
export interface RpcHandler {
  get: (method: getMethods, body?: any) => Promise<any>
  post: (method: postMethods, body: any) => Promise<any>
}
