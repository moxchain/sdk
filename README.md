# MØX SDK

Mox sdk is a set of libraries and solutions developed to create applications using the møx chain

## Available modules

We recommend that you read the features of each module and how they can help you

- [Account](src/modules/account/README.md) Responsible for account and subscription management
- [Transaction](src/modules/transaction/README.md) Responsible for transaction management
- [Node](src/modules/node/README.md) Used to retrieve information from the blockchain
- [Admin](src/modules/admin/README.md) Admin utilities, like set webhook url to be advised about new events in blockchain
- [Context](src/modules/context/README.md) Context related functions
- [Actor](src/modules/actor/README.md) Actor related functions
- [Item](src/modules/items/README.md) Items related functions
- [Balances](src/modules/balances/README.md) MØX Balances related functions
- [Storage](src/modules/storage/README.md) Use to get access to blockchain storage


## Quick start

### Initialize your SDK

To initialize your SDK, you will need a url to access the mox service, which can be acquired by contacting us through our social networks.
**Soon we will provide a public access url**

``` typescript
  import mox from 'mox-sdk'

  const sdk = await mox({
    network: 'aquarium', // aquarium for developers network; testnet for testnet network; main for production network
    serviceUrl: 'https://mox.service.url.example.com/'
  })
```

### Create new key pair

With mox sdk you can create new mnemonic to generate key pairs, so the first step is to generate a mnemonic for the user

``` const mnemonic = sdk.account.createMnemonic() ```

If you already have a mnemonic, just add it to the sdk with the following function

``` sdk.account.setMnemonic('your mnemonic here') ```

then you must enable this account using the function

``` sdk.account.enableAccountByMnemonic() ```

to return your public key, just use

``` const publicKey = sdk.account.publicKey() ```

There are other ways to create accounts and initialize them, please check the [account module](src/modules/account/README.md)

### Create new transaction

MØX has a series of entities that can be used for gamification, each of these entities has its own module in the sdk, let's create a new context to see how transactions work

Read more about mØx entities on our [website](https://moxchain.com)

Let's access the context module and call the create context function

``` typescript
  const context = await sdk.context.createContext(
    "My Context", // Context identifier can be any string that will be converted to a hash to become your context id
    100 // Era period means that this transaction has to be propagated in a maximum of 100 blocks after its creation 
  );

  const {
    utx, // This is the unsigned transaction that you will use to propagate this context to network
    contextId
  } = context
```

Ok, the function inside the context module returns to you an unsigned transaction, now we need sign it and propagate the transaction

``` typescript
  // we convert the unsigned transaction to an signable payload
  const signPayload = sdk.transaction.signPayload(utx);
  // using the account module with the instantiates account we create a signature
  const signature = sdk.account.sign(signPayload)
  // We put all together
  const transaction = sdk.transaction.constructSignedTx(utx, signature)
  // and send to network
  const hash = await sdk.node.submitTx(transaction)

  // OR you can use short version

  const hash = await sdk.transaction.signAndSendTransaction(utx)
```

### Access the blockchain storage

After we create our context and entities below it, we will eventually have to access blockchain storage to retrieve data on actors, items, attributes, and so on.
The storage module concentrates all these actions

``` typescript
  const contextData = await sdk.storage.getContext(contextId)
```

## Where to use MØX sdk?

If your system allows it, prefer to use it in front end applications, as the sdk works primarily offline so that users have the security that no private information will be leaked.
But don't trust us, check the above code for yourself.
