# Admin Module

Here you will find all the features related to the MØX admin

_This is a off chain module_

## Save

This function is used to create an api key to your account, use this api key to set some webhook that will advise you an some event happens with your account or some context that belongs to your account

```typescript
  save()
```

Returns an api key

### WARNING: You cannot save the same account more than once, so save your api key because de node will reject an second request

## Enable ID

Used to enable some api key in sdk

```typescript
  enableId(
    id: string // Your api key
  )
```

## Set webhook url

When some transaction affect your account or some context that belongs to your account the mox service will make an POST request to this URL

```typescript
  setWebhook(
    url: string // The url, make sure this url accept post request
  )
```
