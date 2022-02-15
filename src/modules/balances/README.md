# Balances Module

Here you will find all the features related to the MØX balances

## Transfer møx

Used to send your møx to another account

``` typescript
  transfer (
    amount: number, // The amount you want to transfer 
    to: string, // Who will receive
    era = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
    ) => Promise<UnsignedTransaction>
```

Returns an unsigned transaction that can be used to propagate your transfer to network

## Get balance

Used to see the møx balance of any account

```typescript
  get (
    accountId: string // the account
  ) => Promise<string>
```

Returns a string that represent the møx balance
