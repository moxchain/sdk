# Context Module

Here you will find all the features related to the MØX Context

## Create context

Context is the data struct that will be store all components of your game, use this function to create a new one

```typescript
  createContext(
    identifier: string, // Any integer number in string format that you can use to identify this context
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  )
```

Returns a unsigned transaction

## Transfer context

Use this function to transfer your context and ALL entities above him to another account

```typescript
  transferContext(
    transferParams: {
      contextId: string // Your context hash
      to: string //  account who will receive
    },
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  )
```

Returns a unsigned transaction
