import { Block } from '@/domain/models/block'
import { Runtime } from '@/domain/models/runtime'

export interface NodeHandler {
  block: () => Promise<Block>
  genesis: () => Promise<string>
  metadata: () => Promise<string>
  runtime: () => Promise<Runtime>
  submitTx: (tx: string) => Promise<string>
}
