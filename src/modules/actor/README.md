# Actor Module

Here you will find all the features related to the MØX actors

## Create actor

Used to create new actors

``` typescript
  createActor(
    actorParams: {
        identifier: number // Actor nonce
        commonType: number // Generic number that can be use to link an actor to some group
        contextId: string // The context who actor belongs
        availableToSale: boolean // If this actor will be available to sale
        price: number | null // The price of actor
    },
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  ) 
```

Returns an unsigned transaction that can be used to create and actor with the following params

## Create actor attributes

Used to create new actor attributes

``` typescript
  createActorAttribute(
    attributeParams: {
        identifier: number // Attribute nonce
        val: number // The value of atribute
        mutable: boolean // if mutable is true, the context owner can change this attribute even if they not the owner of actor, if false, only items can change this value
        actorId: string // The actor who will receive
        contextId: string // The context who actor belongs
    },
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  )
```

Returns an unsigned transaction that can be used to create and actor attribute with the following params

## Change actor sale status

Used to make available or unavailable an actor from a public sale

```typescript
  changeActorSaleStatus(
    saleStatus: {
        actorId: string // Actor hash
        availableToSale: boolean // If this actor is available to sale
        price: number | null // The price of actor
    },
     eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  )
```

### **WARNING: actor sale status accept price 0, so, any account in network can get your actor for free**

## Buy actor

Used to buy some available actor in network

```typescript
  buyActor(
    actorId: string, // Actor hash that you want to buy
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  )
```

## Transfer actor

Used to transfer an actor that belongs to you to another account

```typescript
  transferActor(
    transferParams: {
        actorId: string // Actor hash
        to: string // Account who will receive
    },
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  )
```
