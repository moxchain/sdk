# Node Module

Here you will find all the features related to the MØX Node

## Get last block from node

```typescript
  await block()
```

Returns the last block received on node

## Get genesis block

```typescript
  await genesis()
```

Returns the first block of chain

## Get node metadata

```typescript
  await metadata()
```

Returns the metadata of node

## Get node runtime

```typescript
  await runtime()
```

Returns the runtime information

## Submit transaction

You can use this function to submit transactions to network

```typescript
  submitTx(
    transaction: string // This transaction need to be signed and constructed with constructSignedTx function in transaction module
  )
```

Returns a transaction hash if success
