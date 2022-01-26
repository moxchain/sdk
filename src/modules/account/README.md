# Account Module

Here you will find all the features related to the MØX account

## Create mnemonic

``` createMnemonic() ```
Return a new mnemonic with 12 words that can be used to initialize some account in sdk.

## Set mnemonic

``` setMnemonic(mnemonic: string) ```
Void function used to initialize some account with existing mnemonic

## Convert mnemonic to seed

``` mnemonicToSeed() ```
Get the mnemonic instantiated on module, convert to secret seed and returns it

## Enable account using some mnemonic

``` enableAccountByMnemonic() ```
Get the mnemonic instantiated in module and initialize account

## Enable account using seed

``` enableAccountBySeed() ```
Get the seed instantiated in module and initialize account

## Disable Account

``` disableAccount() ```
Remove instantiated account from sdk

## Public Key

``` publicKey ```
Returns the public key of instantiated account

## Get Nonce

``` getNonce() ```
Returns the next transaction nonce of account instantiated on sdk

## Sign

``` sign(transaction: string) ```
Returns an signature to transaction
