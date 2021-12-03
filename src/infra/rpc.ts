import { RpcHandler } from '@/domain/protocols/rpc'
import agent from 'superagent'

export class Rpc implements RpcHandler {
  constructor (
    private readonly serviceUrl: string
  ) {}

  async get (method, body) {
    const res = await agent.get(`${this.serviceUrl}/${method}`).send(body)
    if (res.statusCode !== 200) throw new Error(res.body)
    return res.body
  }

  async post (method, body) {
    const res = await agent.post(`${this.serviceUrl}/${method}`).send(body)
    if (res.statusCode !== 200) throw new Error(res.body)
    return res.body
  }
}
