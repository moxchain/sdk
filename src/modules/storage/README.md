# Storage Module

Here you will find all the features related to the MØX storage

## Get context

Use this function to get context data

```typescript
  await getContext(contextHash: string)
```

Returns context data

## Get actor

Use this function to get actor data

```typescript
  await getActor(actorHash: string)
```

Returns actor data

## Get actor attributes

Use this function to get actor attributes data

```typescript
  await getActorAttributes(actorHash: string)
```

Returns actor attributes data

## Get item

Use this function to get item data

```typescript
  await getItem(itemHash: string)
```

Returns item data

## Get item actions

Use this function to get item actions data

```typescript
  await getItemActions(itemHash: string)
```

Returns item actions data

## Get item balances

Use this function to get item balances data

```typescript
  await getItemBalances(
    itemHash: string,
    accountId: string // The public key of owner
  )
```

Returns number
