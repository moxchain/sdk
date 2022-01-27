# Item Module

Here you will find all the features related to the MØX items

## Create Item

Use this function to create new items

```typescript
  createItem(
    itemParams: {
        identifier: number // Generic identifier number
        contextId: string // The context who this item will belong
        totalSupply: number // How many items will be created
        unitPrice: number // The price for each item
        availableToSale: boolean // If this item is available to sale
    },
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  )
```

Returns an unsigned transaction that can be used to create and item with the following params

## Create item action

Item actions can change the attributes of an actor, use this function to create this actions

```typescript
  createItemAction(
    actionParams: {
        itemId: string // The item who this action belongs
        targetCommonType: number // The common_type of actor who this action will change
        actorAttributeIndex: number // The index of attribute who this action will change
        operation: boolean // If operation is true this action will INCREMENT the attribute value, if false the action will DECREMENT
        amount: number // The value to increment or decrement
    },
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  )
```

Returns an unsigned transaction

## Change item sale status

Use this function to change item sale status

```typescript
  changeItemSaleStatus(
    saleStatusParams: {
        itemId: string // The item hash
        unitPrice: number // The price for each item
        availableToSale: boolean // If this item is available to sale
    },
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  )
```

Returns an unsigned transaction

### **WARNING: item sale status accept price 0, so, any account in network can get your item for free**

## Buy item

Use this function to buy some available item in network

```typescript
  buyItem(
    buyParams: {
        itemId: string // The item hash you want to buy
        amount: number // The amount
    },
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  )
```

Returns an unsigned transaction

## Transfer items

Use this function to transfer your items to another account

```typescript
  transferItem(
    transfer: {
        itemId: string // The item hash
        amount: number // How many items you want to transger
        to: string // Account who will receive
    },
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  )
```

Returns an unsigned transaction

## Consume item

Use this function to burn an item and activate your actions aimed at an actor you own

```typescript
  consumeItem(
    consumeParams: {
        itemId: string // The item hash
        actorId: string // The actor hash
    },
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  )
```

Returns an unsigned transaction
