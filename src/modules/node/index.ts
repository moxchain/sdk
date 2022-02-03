import { NodeHandler } from '@/domain/protocols/node'
import { RpcHandler } from '@/domain/protocols/rpc'
import { Block } from '@/domain/models/block'
import { Runtime } from '@/domain/models/runtime'

export class Node implements NodeHandler {
  constructor (
    private readonly rpc: RpcHandler
  ) {}

  async block () {
    const lastBlockData = await this.rpc.get('getBlock') as {
      block: {
        extrinsics: any[]
        header: any
      }
      blockHash: string
    }
    const parse: Block = {
      extrinsics: lastBlockData.block.extrinsics,
      header: lastBlockData.block.header,
      hash: lastBlockData.blockHash
    }
    return parse
  }

  async genesis () {
    const genesisBlock = await this.rpc.get('getGenesis') as string
    return genesisBlock
  }

  async metadata () {
    const metarpc = await this.rpc.get('metadata') as `0x${string}`
    return metarpc
  }

  async runtime () {
    const run = await this.rpc.get('runtime') as Runtime
    return run
  }

  async submitTx (tx: string) {
    const txhash = await this.rpc.post('submitTx', {
      tx
    }) as string
    return txhash
  }
}
