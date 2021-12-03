export interface Block {
  extrinsics: string[]
  hash: string
  header: {
    digest: { logs: any[] }
    extrinsicRoot: string
    number: string
    parentHash: string
    stateRoot: string
  }
}
