# Transaction Module

Here you will find all the features related to the MØX Transaction

## Get the node information to create new transaction

Use this function to get information to create new transaction for mØx network

```typescript
  constructInfo(
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  )
```

Returns information to create transaction

## Decode transaction

Use this function to decode transaction information

```typescript
  decodeTx(
    tx: UnsignedTransaction | string
  )
```

Returns transaction info

## Create signable payload

Use this function to create a signable transaction

```typescript
  signPayload(
    tx: UnsignedTransaction
  )
```

Returns a string to be signed for account module

## Construct signable transaction

Use this function to merge a transaction and signature in only one payload to be submit to the network

```typescript
  constructSignedTx(
    tx: UnsignedTransaction, 
    signature: `0x${string}`
  )
```

Returns payload ready to be propagated in network

## Predict the hash of a transaction

Use this function to predict what the hash of a transaction will be before propagate

```typescript
  calculateTxHash(
    tx: string // The return of constructSignedTx
  )
```

Returns a transaction hash
