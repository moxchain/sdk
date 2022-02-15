# Context Module

Here you will find all the features related to the MØX Context

## Create context

Context is the data struct that will be store all components of your game, use this function to create a new one

```typescript
  createContext(
    identifier: string, // Any string that will be converted into a hash that represent your context id
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  ) => Promise<{
    utx: UnsignedTransaction, // Use this data with signAndSend function inside transaction module to propagate this actor to network 
    contextId: string
    }>
```

Returns an unsigned transaction that can be used to create an context with the following params and the context id

## Transfer context

Use this function to transfer your context and ALL entities above him to another account

```typescript
  transferContext(
    transferParams: {
      contextId: string // Your context hash
      to: string //  account who will receive
    },
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  ) => Promise<UnsignedTransaction>
```

Returns a unsigned transaction
