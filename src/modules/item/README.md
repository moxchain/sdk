# Item Module

Here you will find all the features related to the MØX items

## Create Item

Use this function to create new items

```typescript
  createItem(
    itemParams: {
        identifier: number // Any string that will be converted into a hash that represent your item id
        contextId: string // The context who this item will belong
        totalSupply: number // How many items will be created
        unitPrice: number // The price for each item
        availableToSale: boolean // If this item is available to sale
    },
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  ) => Promise<{
    utx: UnsignedTransaction, // Use this data with signAndSend function inside transaction module to propagate this actor to network 
    itemId: string
    }>
```

Returns an unsigned transaction that can be used to create and item with the following params and the item id

## Increase item supply

Use this function to mint more itens

```typescript
  increaseItemSupply (supply: {
      itemId: string // The item id who you will increase total supply
      to: string // Who will receive this items
      amount: number // How many itens you will create
  }, era = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  ) => Promise<UnsignedTransaction>
```

Returns an unsigned transaction

## Decrease item supply

Use this function to burn itens from your account

```typescript
  decreaseItemSupply (supply: {
      itemId: string // The item id who you will decrease total supply
      amount: number // How many itens you will burn
  }, era = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  ) => Promise<UnsignedTransaction>
```

Returns an unsigned transaction

## Create item action

Item actions can change the attributes of an actor, use this function to create this actions

```typescript
  createItemAction(
    actionParams: {
        itemId: string // The item who this action belongs
        actorAttributeId: string // The id of attribute who you will affected
        operation: boolean // If operation is true this action will INCREMENT the attribute value, if false the action will DECREMENT
        amount: number // The value to increment or decrement
    },
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  )  => Promise<UnsignedTransaction>
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
  ) => Promise<UnsignedTransaction>
```

Returns an unsigned transaction

### **WARNING: item sale status accept price 0, so, any account in network can get your item for free**

## Buy item

Use this function to buy some available item in network

```typescript
  buyItem(
    buyParams: {
        itemId: string // The item hash you want to buy
        seller: string // The account who selling this item
        amount: number // The amount
    },
    eraPeriod = 100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation
  ) => Promise<UnsignedTransaction>
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
  ) => Promise<UnsignedTransaction>
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
  ) => Promise<UnsignedTransaction>
```

Returns an unsigned transaction
