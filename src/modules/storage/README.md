# Storage Module

Here you will find all the features related to the MØX storage

## Get context

Use this function to get context data

```typescript
  getContext(contextHash: string) => Promise<{
    owner: string
  }>
```

Returns context data

## Get actor

Use this function to get actor data

```typescript
  getActor(actorHash: string) => Promise<{
  commonType: number
  context: string
  owner: string
  availableToSale: boolean
  price?: number
}>
```

Returns actor data

## Get actor attributes

Use this function to get actor attributes data

```typescript
  getActorAttributes(actorHash: string) => Promise<string[]>
```

Returns actor attributes array

## Get actor attribute

Use this function to get actor attribute data

```typescript
  getActorAttribute(actorHash: string, attributeId: string) => Promise<{
    actorAttributeId: string
    value: number
    mutable: boolean
  }>
```

Returns actor attributes array

## Get item

Use this function to get item data

```typescript
  getItem(itemHash: string) => Promise<{
      context: string
      totalSupply: number
      owner: string
  }>
```

Returns item data

## Get item actions

Use this function to get item actions data

```typescript
  getItemActions(itemHash: string) => Promise<{
      actorAttributeId: string
      operation: boolean
      amount: number
  }[]>
```

Returns item actions array

## Get item balances

Use this function to get item balances data

```typescript
  getItemBalances(
    itemHash: string,
    accountId: string // The public key of owner
  ) => Promise<{
      amount: number,
      unitPrice: number,
      availableToSale: boolean,
  }>
```

Returns number

## Get møx balance

Used to see the møx balance of any account

```typescript
  getMoxBalance (
    accountId: string // the account
  ) => Promise<string>
```

Returns a string that represent the møx balance
