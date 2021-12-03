
type getMethods = 'getBlock' | 'getGenesis' | 'metadata' | 'runtime'
type postMethods = 'add' | 'submitTx'
export interface RpcHandler {
  get: (method: getMethods) => Promise<any>
  post: (method: postMethods, body: any) => Promise<any>
}
