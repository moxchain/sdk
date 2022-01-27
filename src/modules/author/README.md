# Author Module

Here you will find all the features related to the MØX authors

## Submit Transaction

You can use this function to submit transactions to network

```typescript
  submitTx(
    transaction: string // This transaction need to be signed and constructed with constructSignedTx function in transaction module
  )
```

Returns a transaction hash if success
