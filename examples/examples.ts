import { AssetDeployResponseDTO, AssetType, BurnAssetRequestDTO, BuyItemRequestDTO, CheckTokenResponseDTO, CreateCollectionRequestDTO, CreateSingleItemRequestDTO, GameWithdrawalRequestDTO, GateUserResponseDTO, MintNewCollectableRequestDTO, MintNewSftTokenRequestDTO, PageableImplAssetDTO, PageableImplAssetLiteDTO, RoyaltyDTO, TonPlayClient, TransferAssetRequestDTO } from "ton-play-sdk";

const USER_TON_ADDRESS = 'EQ...';
const USER_JWT = 'j.w.t';
const USER_UID = '';

export async function examples(tonPlay: TonPlayClient) {
    await tonPlay.withdraw(new GameWithdrawalRequestDTO({ withdrawalId: 'order-id' }));

    const allAssets: PageableImplAssetLiteDTO = await tonPlay.getAllAccountsAssetsV2(USER_TON_ADDRESS);
    const allGameAssets: PageableImplAssetDTO = await tonPlay.getAllGameAssets();

    const tokenValidationData: CheckTokenResponseDTO = await tonPlay.checkToken(USER_JWT);

    const userInfo: GateUserResponseDTO = await tonPlay.getUserByIdentifier(USER_UID);
    const usersInfo: GateUserResponseDTO[] = await tonPlay.getUsersByIdentifiers(["user-uid-1", "user-uid-2"]);

    const nftOwner: string = await tonPlay.checkNftOwner("nft-address");

    const royalty = new RoyaltyDTO({ numerator: 3, denominator: 100, beneficiaryAddress: "beneficiary-address" }); // 3% royalty
    // in this case the common part of NFTs metadata urls is empty,
    // so all NFTs in the collection must have full metadata url: [
    //     http://example.com/my_storage/metadata_url_example/1.json,
    //     http://example.com/my_storage/metadata_url_example/2.json
    // ]
    const collection1Type = AssetType.NFT;
    const assetCollectionInfo_1: AssetDeployResponseDTO = await tonPlay.deployCollection(collection1Type, new CreateCollectionRequestDTO({
        owner: "collection-owner-address",
        collectionMetadataUrl: "collection-metadata-url",
        itemMetadataCommonUrl: "",
        royalty: royalty,
        maxSupply: 1000
    }));
    const assetCounter_1 = 0;
    const collectableAsset_1 = await tonPlay.mintNewCollectableItem(assetCollectionInfo_1.address, collection1Type, new MintNewCollectableRequestDTO({
        owner: 'ASSET-OWNER-TON-ADDRESS',
        amount: 1,
        itemMetadataPartOfUrl: `http://example.com/my_storage/metadata_url_example/${assetCounter_1 + 1}.json`
    }));

    // in the next case the common part of NFTs metadata urls is kept in the collection storage,
    // so assets should have only: '1.json', '2.json', etc.
    const collection2Type = AssetType.SFT;
    const assetCollectionInfo_2: AssetDeployResponseDTO = await tonPlay.deployCollection(collection2Type, new CreateCollectionRequestDTO({
        owner: "COLLECTION-OWNER-TON-ADDRESS",
        collectionMetadataUrl: "collection-metadata-url",
        itemMetadataCommonUrl: "http://example.com/my_storage/metadata_url_example/",
        royalty: royalty,
        maxSupply: 1000
    }));
    const assetCounter_2 = 0;
    const collectableAsset_2 = await tonPlay.mintNewCollectableItem(assetCollectionInfo_2.address, collection2Type, new MintNewCollectableRequestDTO({
        owner: 'ASSET-OWNER-TON-ADDRESS',
        amount: 1,
        itemMetadataPartOfUrl: `${assetCounter_2 + 1}.json`,
        maxSupply: 1000 // available for SFTs
    }));
    const mintSftResult = await tonPlay.mintSftTokens(collectableAsset_2.address, new MintNewSftTokenRequestDTO({
        owner: "OWNER-TON-ADDRESS",
        amount: 10
    }));

    const singleAssetInfo: AssetDeployResponseDTO = await tonPlay.deploySingle(AssetType.NFT, new CreateSingleItemRequestDTO({
        owner: "asset-owner-address",
        metadata: "metadata-url"
    }));

    const transferResult = await tonPlay.transferAsset(singleAssetInfo.address, AssetType.NFT, new TransferAssetRequestDTO({
        newOwner: "new-owner-ton-address"
    }));

    const burnResult = await tonPlay.burn(collectableAsset_2.address, new BurnAssetRequestDTO({
        type: AssetType.SFT,
        amount: 1
    }));

    const response = await tonPlay.buy(new BuyItemRequestDTO({
        type: AssetType.SFT,
        address: 'ASSET-ADDRESS',
        sellerAddress: '',
        sellerUid: '',

        amount: 3,
        buyerAddress: 'MY-TON-ADDRESS',
    }));
}