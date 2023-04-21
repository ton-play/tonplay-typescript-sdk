# TON Play SDK Examples

```bash
npm install ton-play-sdk
```

To get your API-key follow [the link](https://docs.tonplay.io/digital-assets-api/api-key)
```ts
const apiKey = process.env.X_AUTH_TONPLAY?.toString();
const tonPlay = new TonPlayClient(apiKey);
```

## Withdraw from a game-wallet
### Released in beta mode.
This solution provides auto-withdrawals, so you don't need to sign transactions. 
### Requirements
1. your game should have ​[API Key](https://docs.tonplay.io/digital-assets-api/api-key)
2. your game should have filled withdraw verify URL that must be:
    * GET type 
    * publicly available
    * take query parameter withdrawalId: String
    * return data as {address: String, amount: Numeric}
### Overview
1. Create a project here: [console.tonplay.io](https://console.tonplay.io/), and get a team wallet address. 
2. The game backend creates a withdrawal request (id, amount, receiverAddress) in a database and sends this withdrawRequestId to TON Play.
3. TON Play asks the game backend for details about receiving withdrawRequestId (you need to prepare a publicly accessible withdraws validation endpoint).
4. If withdrawRequestId is valid, the game backend should return an amount and a receiver address -> TON Play will transfer from the team wallet to the target address.
5. If withdrawRequestId is not valid, the game backend should return any error (400, 401, 404 HTTP) -> TON Play will not make any transfer.

```ts
await tonPlay.withdraw(new GameWithdrawalRequestDTO({ withdrawalId: "id" }));
```

## Check TON Play JWT

```ts
const tokenValidationData: CheckTokenResponseDTO = await tonPlay.checkToken("j.w.t");
```

## Get Users Information

The user data might be cashed and differ from the real-time data. It updates every 5 minutes.

```ts
const userInfo: GateUserResponseDTO = await tonPlay.getUserByIdentifier("user-uid");
const usersInfo: GateUserResponseDTO[] = await tonPlay.getUsersByIdentifiers(["user-uid-1", "user-uid-2"]);
```

## Assets

Check out how to create a correct metadata URL here: [metadata](https://docs.tonplay.io/digital-assets-api/metadata)

(!) Make sure that you use valid links and correct JSON files.
### Deploy single asset
```ts
const singleAssetInfo: AssetDeployResponseDTO = await tonPlay.deploySingle(AssetType.NFT, new CreateSingleItemRequestDTO({
    owner: "asset-owner-ton-address",
    metadata: "metadata-url"
}));
```
### Deploy assets collection & mint some items (1)
```ts
const royalty = new RoyaltyDTO({ numerator: 3, denominator: 100, beneficiaryAddress: "beneficiary-ton-address" }); // 3% royalty
// in this case the common part of NFTs metadata urls is empty,
// so all NFTs in the collection must have full metadata url: [
//     http://example.com/my_storage/metadata_url_example/1.json,
//     http://example.com/my_storage/metadata_url_example/2.json
// ]
// or '.json' can be ommited: [
//    https://examplegame:5000/nfts/57,
//    https://examplegame:5000/nfts/58
// ]
const collection1Type = AssetType.NFT;
const assetCollectionInfo_1: AssetDeployResponseDTO = await tonPlay.deployCollection(collection1Type, new CreateCollectionRequestDTO({
    owner: "collection-owner-ton-address",
    collectionMetadataUrl: "https://examplegame:5000/collection.json",
    itemMetadataCommonUrl: "",
    royalty: royalty,
    maxSupply: 1000
}));
const assetCounter_1 = 0;
const collectableAsset_1 = await tonPlay.mintNewCollectableItem(assetCollectionInfo_1.address, collection1Type, new MintNewCollectableRequestDTO({
    owner: "asset-owner-ton-address",
    amount: 1,
    itemMetadataPartOfUrl: `http://example.com/my_storage/metadata_url_example/${assetCounter_1 + 1}.json`
}));
```
### Deploy assets collection & mint/deploy some items/SFT-minters (2)
```ts
// in the next case the common part of NFTs metadata urls is kept in the collection storage,
// so assets should have only: "1.json", "2.json", etc.
const collection2Type = AssetType.SFT;
const assetCollectionInfo_2: AssetDeployResponseDTO = await tonPlay.deployCollection(collection2Type, new CreateCollectionRequestDTO({
    owner: "collection-owner-ton-address",
    collectionMetadataUrl: "collection-metadata-url",
    itemMetadataCommonUrl: "http://example.com/my_storage/metadata_url_example/",
    royalty: royalty,
    maxSupply: 1000
}));
const assetCounter_2 = 0;
const collectableAsset = await tonPlay.mintNewCollectableItem(assetCollectionInfo_2.address, collection2Type, new MintNewCollectableRequestDTO({
    owner: "asset-owner-ton-address",
    amount: 1,
    itemMetadataPartOfUrl: `${assetCounter_2 + 1}.json`,
    maxSupply: 1000 // available for SFTs
}));
```
### Mint SFT via an SFT-minter
```ts
const minterAddress = ""; //collectableAsset_2.address
const mintSftResult = await tonPlay.mintSftTokens(minterAddress, new MintNewSftTokenRequestDTO({
    owner: "owner-ton-address",
    amount: 10
}));
```

### Transfer assets
```ts
const transferResult = await tonPlay.transferAsset(singleAssetInfo.address, AssetType.NFT, new TransferAssetRequestDTO({
    newOwner: "new-owner-ton-address"
}));
```

### Burn assets
```ts
const burnResult = await tonPlay.burn(collectableAsset_2.address, new BurnAssetRequestDTO({
    type: AssetType.SFT,
    amount: 1
}));
```

### Get User Assets
```ts
const allAssets: PageableImplAssetLiteDTO = await tonPlay.getAllAccountsAssetsV2("user-ton-address");
```

### Get Game Assets
```ts
const allGameAssets: PageableImplAssetDTO = await tonPlay.getAllGameAssets();
```
