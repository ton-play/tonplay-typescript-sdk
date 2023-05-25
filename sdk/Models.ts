export class ErrorDetailResponse implements IErrorDetailResponse {
    type!: ErrorDetailResponseType;
    message?: string;
    error!: boolean;

    [key: string]: any;

    constructor(data?: IErrorDetailResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.type = _data["type"];
            this.message = _data["message"];
            this.error = _data["error"];
        }
    }

    static fromJS(data: any): ErrorDetailResponse {
        data = typeof data === 'object' ? data : {};
        let result = new ErrorDetailResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["type"] = this.type;
        data["message"] = this.message;
        data["error"] = this.error;
        return data;
    }

    clone(): ErrorDetailResponse {
        const json = this.toJSON();
        let result = new ErrorDetailResponse();
        result.init(json);
        return result;
    }
}

export interface IErrorDetailResponse {
    type: ErrorDetailResponseType;
    message?: string;
    error: boolean;

    [key: string]: any;
}

export class ErrorResponse implements IErrorResponse {
    error?: ErrorDetailResponse;

    [key: string]: any;

    constructor(data?: IErrorResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.error = _data["error"] ? ErrorDetailResponse.fromJS(_data["error"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ErrorResponse {
        data = typeof data === 'object' ? data : {};
        let result = new ErrorResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["error"] = this.error ? this.error.toJSON() : <any>undefined;
        return data;
    }

    clone(): ErrorResponse {
        const json = this.toJSON();
        let result = new ErrorResponse();
        result.init(json);
        return result;
    }
}

export interface IErrorResponse {
    error?: ErrorDetailResponse;

    [key: string]: any;
}

export class SaleItemRequestDTO implements ISaleItemRequestDTO {
    address!: string;
    price!: number;
    amount?: number;
    type!: AssetType;
    sellerAddress!: string;

    [key: string]: any;

    constructor(data?: ISaleItemRequestDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.address = _data["address"];
            this.price = _data["price"];
            this.amount = _data["amount"];
            this.type = _data["type"];
            this.sellerAddress = _data["sellerAddress"];
        }
    }

    static fromJS(data: any): SaleItemRequestDTO {
        data = typeof data === 'object' ? data : {};
        let result = new SaleItemRequestDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["address"] = this.address;
        data["price"] = this.price;
        data["amount"] = this.amount;
        data["type"] = this.type;
        data["sellerAddress"] = this.sellerAddress;
        return data;
    }

    clone(): SaleItemRequestDTO {
        const json = this.toJSON();
        let result = new SaleItemRequestDTO();
        result.init(json);
        return result;
    }
}

export interface ISaleItemRequestDTO {
    address: string;
    price: number;
    amount?: number;
    type: AssetType;
    sellerAddress: string;

    [key: string]: any;
}

export class DeeplinkResponseDTO implements IDeeplinkResponseDTO {
    url!: string;

    [key: string]: any;

    constructor(data?: IDeeplinkResponseDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.url = _data["url"];
        }
    }

    static fromJS(data: any): DeeplinkResponseDTO {
        data = typeof data === 'object' ? data : {};
        let result = new DeeplinkResponseDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["url"] = this.url;
        return data;
    }

    clone(): DeeplinkResponseDTO {
        const json = this.toJSON();
        let result = new DeeplinkResponseDTO();
        result.init(json);
        return result;
    }
}

export interface IDeeplinkResponseDTO {
    url: string;

    [key: string]: any;
}

export class AssetDeployResponseDTO implements IAssetDeployResponseDTO {
    address!: string;
    url!: string;

    [key: string]: any;

    constructor(data?: IAssetDeployResponseDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.address = _data["address"];
            this.url = _data["url"];
        }
    }

    static fromJS(data: any): AssetDeployResponseDTO {
        data = typeof data === 'object' ? data : {};
        let result = new AssetDeployResponseDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["address"] = this.address;
        data["url"] = this.url;
        return data;
    }

    clone(): AssetDeployResponseDTO {
        const json = this.toJSON();
        let result = new AssetDeployResponseDTO();
        result.init(json);
        return result;
    }
}

export interface IAssetDeployResponseDTO {
    address: string;
    url: string;

    [key: string]: any;
}

export class TransferAssetRequestDTO implements ITransferAssetRequestDTO {
    newOwner!: string;
    amount?: number;
    currentOwnerAddress?: string;

    [key: string]: any;

    constructor(data?: ITransferAssetRequestDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.newOwner = _data["newOwner"];
            this.amount = _data["amount"];
            this.currentOwnerAddress = _data["currentOwnerAddress"];
        }
    }

    static fromJS(data: any): TransferAssetRequestDTO {
        data = typeof data === 'object' ? data : {};
        let result = new TransferAssetRequestDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["newOwner"] = this.newOwner;
        data["amount"] = this.amount;
        data["currentOwnerAddress"] = this.currentOwnerAddress;
        return data;
    }

    clone(): TransferAssetRequestDTO {
        const json = this.toJSON();
        let result = new TransferAssetRequestDTO();
        result.init(json);
        return result;
    }
}

export interface ITransferAssetRequestDTO {
    newOwner: string;
    amount?: number;
    currentOwnerAddress?: string;

    [key: string]: any;
}

export class MintNewSftTokenRequestDTO implements IMintNewSftTokenRequestDTO {
    owner!: string;
    amount!: number;

    [key: string]: any;

    constructor(data?: IMintNewSftTokenRequestDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.owner = _data["owner"];
            this.amount = _data["amount"];
        }
    }

    static fromJS(data: any): MintNewSftTokenRequestDTO {
        data = typeof data === 'object' ? data : {};
        let result = new MintNewSftTokenRequestDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["owner"] = this.owner;
        data["amount"] = this.amount;
        return data;
    }

    clone(): MintNewSftTokenRequestDTO {
        const json = this.toJSON();
        let result = new MintNewSftTokenRequestDTO();
        result.init(json);
        return result;
    }
}

export interface IMintNewSftTokenRequestDTO {
    owner: string;
    amount: number;

    [key: string]: any;
}

export class MintNewCollectableRequestDTO implements IMintNewCollectableRequestDTO {
    owner!: string;
    itemMetadataPartOfUrl!: string;
    amount!: number;
    maxSupply?: number;

    [key: string]: any;

    constructor(data?: IMintNewCollectableRequestDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.owner = _data["owner"];
            this.itemMetadataPartOfUrl = _data["itemMetadataPartOfUrl"];
            this.amount = _data["amount"];
            this.maxSupply = _data["maxSupply"];
        }
    }

    static fromJS(data: any): MintNewCollectableRequestDTO {
        data = typeof data === 'object' ? data : {};
        let result = new MintNewCollectableRequestDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["owner"] = this.owner;
        data["itemMetadataPartOfUrl"] = this.itemMetadataPartOfUrl;
        data["amount"] = this.amount;
        data["maxSupply"] = this.maxSupply;
        return data;
    }

    clone(): MintNewCollectableRequestDTO {
        const json = this.toJSON();
        let result = new MintNewCollectableRequestDTO();
        result.init(json);
        return result;
    }
}

export interface IMintNewCollectableRequestDTO {
    owner: string;
    itemMetadataPartOfUrl: string;
    amount: number;
    maxSupply?: number;

    [key: string]: any;
}

export class CreateSingleItemRequestDTO implements ICreateSingleItemRequestDTO {
    owner!: string;
    metadata!: string;
    maxSupply?: number;

    [key: string]: any;

    constructor(data?: ICreateSingleItemRequestDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.owner = _data["owner"];
            this.metadata = _data["metadata"];
            this.maxSupply = _data["maxSupply"];
        }
    }

    static fromJS(data: any): CreateSingleItemRequestDTO {
        data = typeof data === 'object' ? data : {};
        let result = new CreateSingleItemRequestDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["owner"] = this.owner;
        data["metadata"] = this.metadata;
        data["maxSupply"] = this.maxSupply;
        return data;
    }

    clone(): CreateSingleItemRequestDTO {
        const json = this.toJSON();
        let result = new CreateSingleItemRequestDTO();
        result.init(json);
        return result;
    }
}

export interface ICreateSingleItemRequestDTO {
    owner: string;
    metadata: string;
    maxSupply?: number;

    [key: string]: any;
}

export class CreateCollectionRequestDTO implements ICreateCollectionRequestDTO {
    owner!: string;
    maxSupply!: number;
    collectionMetadataUrl!: string;
    itemMetadataCommonUrl!: string;
    royalty!: RoyaltyDTO;

    [key: string]: any;

    constructor(data?: ICreateCollectionRequestDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.royalty = new RoyaltyDTO();
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.owner = _data["owner"];
            this.maxSupply = _data["maxSupply"];
            this.collectionMetadataUrl = _data["collectionMetadataUrl"];
            this.itemMetadataCommonUrl = _data["itemMetadataCommonUrl"];
            this.royalty = _data["royalty"] ? RoyaltyDTO.fromJS(_data["royalty"]) : new RoyaltyDTO();
        }
    }

    static fromJS(data: any): CreateCollectionRequestDTO {
        data = typeof data === 'object' ? data : {};
        let result = new CreateCollectionRequestDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["owner"] = this.owner;
        data["maxSupply"] = this.maxSupply;
        data["collectionMetadataUrl"] = this.collectionMetadataUrl;
        data["itemMetadataCommonUrl"] = this.itemMetadataCommonUrl;
        data["royalty"] = this.royalty ? this.royalty.toJSON() : <any>undefined;
        return data;
    }

    clone(): CreateCollectionRequestDTO {
        const json = this.toJSON();
        let result = new CreateCollectionRequestDTO();
        result.init(json);
        return result;
    }
}

export interface ICreateCollectionRequestDTO {
    owner: string;
    maxSupply: number;
    collectionMetadataUrl: string;
    itemMetadataCommonUrl: string;
    royalty: RoyaltyDTO;

    [key: string]: any;
}

export class RoyaltyDTO implements IRoyaltyDTO {
    numerator!: number;
    denominator!: number;
    beneficiaryAddress?: string;

    [key: string]: any;

    constructor(data?: IRoyaltyDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.numerator = _data["numerator"];
            this.denominator = _data["denominator"];
            this.beneficiaryAddress = _data["beneficiaryAddress"];
        }
    }

    static fromJS(data: any): RoyaltyDTO {
        data = typeof data === 'object' ? data : {};
        let result = new RoyaltyDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["numerator"] = this.numerator;
        data["denominator"] = this.denominator;
        data["beneficiaryAddress"] = this.beneficiaryAddress;
        return data;
    }

    clone(): RoyaltyDTO {
        const json = this.toJSON();
        let result = new RoyaltyDTO();
        result.init(json);
        return result;
    }
}

export interface IRoyaltyDTO {
    numerator: number;
    denominator: number;
    beneficiaryAddress?: string;

    [key: string]: any;
}

export class BuyItemRequestDTO implements IBuyItemRequestDTO {
    address!: string;
    amount?: number;
    type!: AssetType;
    // sellerUid?: string;
    sellerAddress!: string;
    buyerAddress!: string;

    [key: string]: any;

    constructor(data?: IBuyItemRequestDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.address = _data["address"];
            this.amount = _data["amount"];
            this.type = _data["type"];
            this.sellerUid = _data["sellerUid"];
            this.sellerAddress = _data["sellerAddress"];
            this.buyerAddress = _data["buyerAddress"];
        }
    }

    static fromJS(data: any): BuyItemRequestDTO {
        data = typeof data === 'object' ? data : {};
        let result = new BuyItemRequestDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["address"] = this.address;
        data["amount"] = this.amount;
        data["type"] = this.type;
        data["sellerUid"] = this.sellerUid;
        data["sellerAddress"] = this.sellerAddress;
        data["buyerAddress"] = this.buyerAddress;
        return data;
    }

    clone(): BuyItemRequestDTO {
        const json = this.toJSON();
        let result = new BuyItemRequestDTO();
        result.init(json);
        return result;
    }
}

export interface IBuyItemRequestDTO {
    address: string;
    amount?: number;
    type: AssetType;
    // sellerUid?: string;
    sellerAddress: string;
    buyerAddress: string;

    [key: string]: any;
}

export class CancelItemRequestDTO implements ICancelItemRequestDTO {
    address!: string;
    amount?: number;
    type!: AssetType;
    sellerAddress!: string;

    [key: string]: any;

    constructor(data?: ICancelItemRequestDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.address = _data["address"];
            this.amount = _data["amount"];
            this.type = _data["type"];
            this.sellerAddress = _data["sellerAddress"];
        }
    }

    static fromJS(data: any): CancelItemRequestDTO {
        data = typeof data === 'object' ? data : {};
        let result = new CancelItemRequestDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["address"] = this.address;
        data["amount"] = this.amount;
        data["type"] = this.type;
        data["sellerAddress"] = this.sellerAddress;
        return data;
    }

    clone(): CancelItemRequestDTO {
        const json = this.toJSON();
        let result = new CancelItemRequestDTO();
        result.init(json);
        return result;
    }
}

export interface ICancelItemRequestDTO {
    address: string;
    amount?: number;
    type: AssetType;
    sellerAddress: string;

    [key: string]: any;
}

export class GameWithdrawalRequestDTO implements IGameWithdrawalRequestDTO {
    withdrawalId!: string;

    [key: string]: any;

    constructor(data?: IGameWithdrawalRequestDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.withdrawalId = _data["withdrawalId"];
        }
    }

    static fromJS(data: any): GameWithdrawalRequestDTO {
        data = typeof data === 'object' ? data : {};
        let result = new GameWithdrawalRequestDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["withdrawalId"] = this.withdrawalId;
        return data;
    }

    clone(): GameWithdrawalRequestDTO {
        const json = this.toJSON();
        let result = new GameWithdrawalRequestDTO();
        result.init(json);
        return result;
    }
}

export interface IGameWithdrawalRequestDTO {
    withdrawalId: string;

    [key: string]: any;
}

export class CheckTokenResponseDTO implements ICheckTokenResponseDTO {
    valid!: boolean;
    active!: boolean;
    userUid?: string;

    [key: string]: any;

    constructor(data?: ICheckTokenResponseDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.valid = _data["valid"];
            this.active = _data["active"];
            this.userUid = _data["userUid"];
        }
    }

    static fromJS(data: any): CheckTokenResponseDTO {
        data = typeof data === 'object' ? data : {};
        let result = new CheckTokenResponseDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["valid"] = this.valid;
        data["active"] = this.active;
        data["userUid"] = this.userUid;
        return data;
    }

    clone(): CheckTokenResponseDTO {
        const json = this.toJSON();
        let result = new CheckTokenResponseDTO();
        result.init(json);
        return result;
    }
}

export interface ICheckTokenResponseDTO {
    valid: boolean;
    active: boolean;
    userUid?: string;

    [key: string]: any;
}

export class AssetCollectionLiteDTO implements IAssetCollectionLiteDTO {
    name?: string;
    avatar!: string;
    address?: string;
    ownerProfile?: UserLiteDTO;
    size!: number;

    [key: string]: any;

    constructor(data?: IAssetCollectionLiteDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.name = _data["name"];
            this.avatar = _data["avatar"];
            this.address = _data["address"];
            this.ownerProfile = _data["ownerProfile"] ? UserLiteDTO.fromJS(_data["ownerProfile"]) : <any>undefined;
            this.size = _data["size"];
        }
    }

    static fromJS(data: any): AssetCollectionLiteDTO {
        data = typeof data === 'object' ? data : {};
        let result = new AssetCollectionLiteDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["name"] = this.name;
        data["avatar"] = this.avatar;
        data["address"] = this.address;
        data["ownerProfile"] = this.ownerProfile ? this.ownerProfile.toJSON() : <any>undefined;
        data["size"] = this.size;
        return data;
    }

    clone(): AssetCollectionLiteDTO {
        const json = this.toJSON();
        let result = new AssetCollectionLiteDTO();
        result.init(json);
        return result;
    }
}

export interface IAssetCollectionLiteDTO {
    name?: string;
    avatar: string;
    address?: string;
    ownerProfile?: UserLiteDTO;
    size: number;

    [key: string]: any;
}

export class AssetFeesDTO implements IAssetFeesDTO {
    networkFee!: number;
    royaltyFee?: number;
    serviceFee?: number;

    [key: string]: any;

    constructor(data?: IAssetFeesDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.networkFee = _data["networkFee"];
            this.royaltyFee = _data["royaltyFee"];
            this.serviceFee = _data["serviceFee"];
        }
    }

    static fromJS(data: any): AssetFeesDTO {
        data = typeof data === 'object' ? data : {};
        let result = new AssetFeesDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["networkFee"] = this.networkFee;
        data["royaltyFee"] = this.royaltyFee;
        data["serviceFee"] = this.serviceFee;
        return data;
    }

    clone(): AssetFeesDTO {
        const json = this.toJSON();
        let result = new AssetFeesDTO();
        result.init(json);
        return result;
    }
}

export interface IAssetFeesDTO {
    networkFee: number;
    royaltyFee?: number;
    serviceFee?: number;

    [key: string]: any;
}

export class AssetLiteDTO implements IAssetLiteDTO {
    address?: string;
    name?: string;
    description?: string;
    image?: string;
    quantity?: number;
    supply!: number;
    index?: number;
    type!: AssetType;
    rarity?: string;
    category?: string;
    game!: GameLiteDTO;
    market?: AssetMarketDetails;
    collectionName?: string;
    locked!: boolean;
    properties?: AssetPropertiesDTO;

    [key: string]: any;

    constructor(data?: IAssetLiteDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.game = new GameLiteDTO();
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.address = _data["address"];
            this.name = _data["name"];
            this.description = _data["description"];
            this.image = _data["image"];
            this.quantity = _data["quantity"];
            this.supply = _data["supply"];
            this.index = _data["index"];
            this.type = _data["type"];
            this.rarity = _data["rarity"];
            this.category = _data["category"];
            this.game = _data["game"] ? GameLiteDTO.fromJS(_data["game"]) : new GameLiteDTO();
            this.market = _data["market"] ? AssetMarketDetails.fromJS(_data["market"]) : <any>undefined;
            this.collectionName = _data["collectionName"];
            this.locked = _data["locked"];
            this.properties = _data["properties"] ? AssetPropertiesDTO.fromJS(_data["properties"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AssetLiteDTO {
        data = typeof data === 'object' ? data : {};
        let result = new AssetLiteDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["address"] = this.address;
        data["name"] = this.name;
        data["description"] = this.description;
        data["image"] = this.image;
        data["quantity"] = this.quantity;
        data["supply"] = this.supply;
        data["index"] = this.index;
        data["type"] = this.type;
        data["rarity"] = this.rarity;
        data["category"] = this.category;
        data["game"] = this.game ? this.game.toJSON() : <any>undefined;
        data["market"] = this.market ? this.market.toJSON() : <any>undefined;
        data["collectionName"] = this.collectionName;
        data["locked"] = this.locked;
        data["properties"] = this.properties ? this.properties.toJSON() : <any>undefined;
        return data;
    }

    clone(): AssetLiteDTO {
        const json = this.toJSON();
        let result = new AssetLiteDTO();
        result.init(json);
        return result;
    }
}

export interface IAssetLiteDTO {
    address?: string;
    name?: string;
    description?: string;
    image?: string;
    quantity?: number;
    supply: number;
    index?: number;
    type: AssetType;
    rarity?: string;
    category?: string;
    game: GameLiteDTO;
    market?: AssetMarketDetails;
    collectionName?: string;
    locked: boolean;
    properties?: AssetPropertiesDTO;

    [key: string]: any;
}

export class AssetMarketDetails implements IAssetMarketDetails {
    status?: AssetMarketDetailsStatus;
    isOwner!: boolean;
    price?: number;
    sellPrice?: number;
    seller?: UserLiteDTO;
    fee?: AssetFeesDTO;
    notForSale!: boolean;
    availableForBuy?: number;
    mySellingCount!: number;
    sellers?: ItemForSaleResponseDTO[];

    [key: string]: any;

    constructor(data?: IAssetMarketDetails) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.status = _data["status"];
            this.isOwner = _data["isOwner"];
            this.price = _data["price"];
            this.sellPrice = _data["sellPrice"];
            this.seller = _data["seller"] ? UserLiteDTO.fromJS(_data["seller"]) : <any>undefined;
            this.fee = _data["fee"] ? AssetFeesDTO.fromJS(_data["fee"]) : <any>undefined;
            this.notForSale = _data["notForSale"];
            this.availableForBuy = _data["availableForBuy"];
            this.mySellingCount = _data["mySellingCount"];
            if (Array.isArray(_data["sellers"])) {
                this.sellers = [] as any;
                for (let item of _data["sellers"])
                    this.sellers!.push(ItemForSaleResponseDTO.fromJS(item));
            }
        }
    }

    static fromJS(data: any): AssetMarketDetails {
        data = typeof data === 'object' ? data : {};
        let result = new AssetMarketDetails();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["status"] = this.status;
        data["isOwner"] = this.isOwner;
        data["price"] = this.price;
        data["sellPrice"] = this.sellPrice;
        data["seller"] = this.seller ? this.seller.toJSON() : <any>undefined;
        data["fee"] = this.fee ? this.fee.toJSON() : <any>undefined;
        data["notForSale"] = this.notForSale;
        data["availableForBuy"] = this.availableForBuy;
        data["mySellingCount"] = this.mySellingCount;
        if (Array.isArray(this.sellers)) {
            data["sellers"] = [];
            for (let item of this.sellers)
                data["sellers"].push(item.toJSON());
        }
        return data;
    }

    clone(): AssetMarketDetails {
        const json = this.toJSON();
        let result = new AssetMarketDetails();
        result.init(json);
        return result;
    }
}

export interface IAssetMarketDetails {
    status?: AssetMarketDetailsStatus;
    isOwner: boolean;
    price?: number;
    sellPrice?: number;
    seller?: UserLiteDTO;
    fee?: AssetFeesDTO;
    notForSale: boolean;
    availableForBuy?: number;
    mySellingCount: number;
    sellers?: ItemForSaleResponseDTO[];

    [key: string]: any;
}

export class AssetPropertiesDTO implements IAssetPropertiesDTO {
    category?: string;
    owner?: string;
    ownerProfile?: UserLiteDTO;
    collection?: AssetCollectionLiteDTO;
    attributes?: string;

    [key: string]: any;

    constructor(data?: IAssetPropertiesDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.category = _data["category"];
            this.owner = _data["owner"];
            this.ownerProfile = _data["ownerProfile"] ? UserLiteDTO.fromJS(_data["ownerProfile"]) : <any>undefined;
            this.collection = _data["collection"] ? AssetCollectionLiteDTO.fromJS(_data["collection"]) : <any>undefined;
            this.attributes = _data["attributes"];
        }
    }

    static fromJS(data: any): AssetPropertiesDTO {
        data = typeof data === 'object' ? data : {};
        let result = new AssetPropertiesDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["category"] = this.category;
        data["owner"] = this.owner;
        data["ownerProfile"] = this.ownerProfile ? this.ownerProfile.toJSON() : <any>undefined;
        data["collection"] = this.collection ? this.collection.toJSON() : <any>undefined;
        data["attributes"] = this.attributes;
        return data;
    }

    clone(): AssetPropertiesDTO {
        const json = this.toJSON();
        let result = new AssetPropertiesDTO();
        result.init(json);
        return result;
    }
}

export interface IAssetPropertiesDTO {
    category?: string;
    owner?: string;
    ownerProfile?: UserLiteDTO;
    collection?: AssetCollectionLiteDTO;
    attributes?: string;

    [key: string]: any;
}

export class GameLiteDTO implements IGameLiteDTO {
    key?: string;
    name?: string;
    image?: string;

    [key: string]: any;

    constructor(data?: IGameLiteDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.key = _data["key"];
            this.name = _data["name"];
            this.image = _data["image"];
        }
    }

    static fromJS(data: any): GameLiteDTO {
        data = typeof data === 'object' ? data : {};
        let result = new GameLiteDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["key"] = this.key;
        data["name"] = this.name;
        data["image"] = this.image;
        return data;
    }

    clone(): GameLiteDTO {
        const json = this.toJSON();
        let result = new GameLiteDTO();
        result.init(json);
        return result;
    }
}

export interface IGameLiteDTO {
    key?: string;
    name?: string;
    image?: string;

    [key: string]: any;
}

export class ItemForSaleResponseDTO implements IItemForSaleResponseDTO {
    address!: string;
    type!: AssetType;
    price!: number;
    sellPrice!: number;
    seller?: UserLiteDTO;
    serviceFee!: number;
    royaltyFee!: number;
    quantity!: number;

    [key: string]: any;

    constructor(data?: IItemForSaleResponseDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.address = _data["address"];
            this.type = _data["type"];
            this.price = _data["price"];
            this.sellPrice = _data["sellPrice"];
            this.seller = _data["seller"] ? UserLiteDTO.fromJS(_data["seller"]) : <any>undefined;
            this.serviceFee = _data["serviceFee"];
            this.royaltyFee = _data["royaltyFee"];
            this.quantity = _data["quantity"];
        }
    }

    static fromJS(data: any): ItemForSaleResponseDTO {
        data = typeof data === 'object' ? data : {};
        let result = new ItemForSaleResponseDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["address"] = this.address;
        data["type"] = this.type;
        data["price"] = this.price;
        data["sellPrice"] = this.sellPrice;
        data["seller"] = this.seller ? this.seller.toJSON() : <any>undefined;
        data["serviceFee"] = this.serviceFee;
        data["royaltyFee"] = this.royaltyFee;
        data["quantity"] = this.quantity;
        return data;
    }

    clone(): ItemForSaleResponseDTO {
        const json = this.toJSON();
        let result = new ItemForSaleResponseDTO();
        result.init(json);
        return result;
    }
}

export interface IItemForSaleResponseDTO {
    address: string;
    type: AssetType;
    price: number;
    sellPrice: number;
    seller?: UserLiteDTO;
    serviceFee: number;
    royaltyFee: number;
    quantity: number;

    [key: string]: any;
}

export class PageableImplAssetLiteDTO implements IPageableImplAssetLiteDTO {
    content!: AssetLiteDTO[];
    pageable!: PageableLite;

    [key: string]: any;

    constructor(data?: IPageableImplAssetLiteDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.content = [];
            this.pageable = new PageableLite();
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            if (Array.isArray(_data["content"])) {
                this.content = [] as any;
                for (let item of _data["content"])
                    this.content!.push(AssetLiteDTO.fromJS(item));
            }
            this.pageable = _data["pageable"] ? PageableLite.fromJS(_data["pageable"]) : new PageableLite();
        }
    }

    static fromJS(data: any): PageableImplAssetLiteDTO {
        data = typeof data === 'object' ? data : {};
        let result = new PageableImplAssetLiteDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        if (Array.isArray(this.content)) {
            data["content"] = [];
            for (let item of this.content)
                data["content"].push(item.toJSON());
        }
        data["pageable"] = this.pageable ? this.pageable.toJSON() : <any>undefined;
        return data;
    }

    clone(): PageableImplAssetLiteDTO {
        const json = this.toJSON();
        let result = new PageableImplAssetLiteDTO();
        result.init(json);
        return result;
    }
}

export interface IPageableImplAssetLiteDTO {
    content: AssetLiteDTO[];
    pageable: PageableLite;

    [key: string]: any;
}

export class PageableLite implements IPageableLite {
    number!: number;
    size!: number;
    total!: number;
    last!: boolean;
    count!: number;

    [key: string]: any;

    constructor(data?: IPageableLite) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.number = _data["number"];
            this.size = _data["size"];
            this.total = _data["total"];
            this.last = _data["last"];
            this.count = _data["count"];
        }
    }

    static fromJS(data: any): PageableLite {
        data = typeof data === 'object' ? data : {};
        let result = new PageableLite();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["number"] = this.number;
        data["size"] = this.size;
        data["total"] = this.total;
        data["last"] = this.last;
        data["count"] = this.count;
        return data;
    }

    clone(): PageableLite {
        const json = this.toJSON();
        let result = new PageableLite();
        result.init(json);
        return result;
    }
}

export interface IPageableLite {
    number: number;
    size: number;
    total: number;
    last: boolean;
    count: number;

    [key: string]: any;
}

export class UserLiteDTO implements IUserLiteDTO {
    identifier?: string;
    username?: string;
    avatar?: string;
    address?: string;

    [key: string]: any;

    constructor(data?: IUserLiteDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.identifier = _data["identifier"];
            this.username = _data["username"];
            this.avatar = _data["avatar"];
            this.address = _data["address"];
        }
    }

    static fromJS(data: any): UserLiteDTO {
        data = typeof data === 'object' ? data : {};
        let result = new UserLiteDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["identifier"] = this.identifier;
        data["username"] = this.username;
        data["avatar"] = this.avatar;
        data["address"] = this.address;
        return data;
    }

    clone(): UserLiteDTO {
        const json = this.toJSON();
        let result = new UserLiteDTO();
        result.init(json);
        return result;
    }
}

export interface IUserLiteDTO {
    identifier?: string;
    username?: string;
    avatar?: string;
    address?: string;

    [key: string]: any;
}

export class AccountResponseDTO implements IAccountResponseDTO {
    status!: string;
    balance!: number;
    address!: string;
    addressRaw!: string;
    code?: string;
    data?: string;

    [key: string]: any;

    constructor(data?: IAccountResponseDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.status = _data["status"];
            this.balance = _data["balance"];
            this.address = _data["address"];
            this.addressRaw = _data["addressRaw"];
            this.code = _data["code"];
            this.data = _data["data"];
        }
    }

    static fromJS(data: any): AccountResponseDTO {
        data = typeof data === 'object' ? data : {};
        let result = new AccountResponseDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["status"] = this.status;
        data["balance"] = this.balance;
        data["address"] = this.address;
        data["addressRaw"] = this.addressRaw;
        data["code"] = this.code;
        data["data"] = this.data;
        return data;
    }

    clone(): AccountResponseDTO {
        const json = this.toJSON();
        let result = new AccountResponseDTO();
        result.init(json);
        return result;
    }
}

export interface IAccountResponseDTO {
    status: string;
    balance: number;
    address: string;
    addressRaw: string;
    code?: string;
    data?: string;

    [key: string]: any;
}

/** Asset Status Explanation       status: null | ON_SALE | TRANSITION    isOwner: true | false    1. isOwner + null    You are the owner, the asset is not on sale, you can put it on sale.       2. isOwner + ON_SALE    You are the owner, the asset is on sale, you can cancel the sale.       3. !isOwner + ON_SALE    You are not the owner, you can buy.       4. !isOwner + null    You can view, you can't do anything.       5. TRANSITION    Nobody can do anything. */
export class AssetDTO implements IAssetDTO {
    address!: string;
    name?: string;
    description?: string;
    image?: string;
    quantity?: number;
    supply!: number;
    index?: number;
    type!: AssetType;
    rarity?: string;
    category?: string;
    social!: AssetSocialCountersDTO;
    game!: GameLiteDTO;
    market?: AssetMarketDetails;
    properties!: AssetPropertiesDTO;

    [key: string]: any;

    constructor(data?: IAssetDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.social = new AssetSocialCountersDTO();
            this.game = new GameLiteDTO();
            this.properties = new AssetPropertiesDTO();
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.address = _data["address"];
            this.name = _data["name"];
            this.description = _data["description"];
            this.image = _data["image"];
            this.quantity = _data["quantity"];
            this.supply = _data["supply"];
            this.index = _data["index"];
            this.type = _data["type"];
            this.rarity = _data["rarity"];
            this.category = _data["category"];
            this.social = _data["social"] ? AssetSocialCountersDTO.fromJS(_data["social"]) : new AssetSocialCountersDTO();
            this.game = _data["game"] ? GameLiteDTO.fromJS(_data["game"]) : new GameLiteDTO();
            this.market = _data["market"] ? AssetMarketDetails.fromJS(_data["market"]) : <any>undefined;
            this.properties = _data["properties"] ? AssetPropertiesDTO.fromJS(_data["properties"]) : new AssetPropertiesDTO();
        }
    }

    static fromJS(data: any): AssetDTO {
        data = typeof data === 'object' ? data : {};
        let result = new AssetDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["address"] = this.address;
        data["name"] = this.name;
        data["description"] = this.description;
        data["image"] = this.image;
        data["quantity"] = this.quantity;
        data["supply"] = this.supply;
        data["index"] = this.index;
        data["type"] = this.type;
        data["rarity"] = this.rarity;
        data["category"] = this.category;
        data["social"] = this.social ? this.social.toJSON() : <any>undefined;
        data["game"] = this.game ? this.game.toJSON() : <any>undefined;
        data["market"] = this.market ? this.market.toJSON() : <any>undefined;
        data["properties"] = this.properties ? this.properties.toJSON() : <any>undefined;
        return data;
    }

    clone(): AssetDTO {
        const json = this.toJSON();
        let result = new AssetDTO();
        result.init(json);
        return result;
    }
}

/** Asset Status Explanation       status: null | ON_SALE | TRANSITION    isOwner: true | false    1. isOwner + null    You are the owner, the asset is not on sale, you can put it on sale.       2. isOwner + ON_SALE    You are the owner, the asset is on sale, you can cancel the sale.       3. !isOwner + ON_SALE    You are not the owner, you can buy.       4. !isOwner + null    You can view, you can't do anything.       5. TRANSITION    Nobody can do anything. */
export interface IAssetDTO {
    address: string;
    name?: string;
    description?: string;
    image?: string;
    quantity?: number;
    supply: number;
    index?: number;
    type: AssetType;
    rarity?: string;
    category?: string;
    social: AssetSocialCountersDTO;
    game: GameLiteDTO;
    market?: AssetMarketDetails;
    properties: AssetPropertiesDTO;

    [key: string]: any;
}

export class AssetSocialCountersDTO implements IAssetSocialCountersDTO {
    likes!: number;
    views!: number;
    youLikeIt!: boolean;

    [key: string]: any;

    constructor(data?: IAssetSocialCountersDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.likes = _data["likes"];
            this.views = _data["views"];
            this.youLikeIt = _data["youLikeIt"];
        }
    }

    static fromJS(data: any): AssetSocialCountersDTO {
        data = typeof data === 'object' ? data : {};
        let result = new AssetSocialCountersDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["likes"] = this.likes;
        data["views"] = this.views;
        data["youLikeIt"] = this.youLikeIt;
        return data;
    }

    clone(): AssetSocialCountersDTO {
        const json = this.toJSON();
        let result = new AssetSocialCountersDTO();
        result.init(json);
        return result;
    }
}

export interface IAssetSocialCountersDTO {
    likes: number;
    views: number;
    youLikeIt: boolean;

    [key: string]: any;
}

export class PageableImplAssetDTO implements IPageableImplAssetDTO {
    content!: AssetDTO[];
    pageable!: PageableLite;

    [key: string]: any;

    constructor(data?: IPageableImplAssetDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.content = [];
            this.pageable = new PageableLite();
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            if (Array.isArray(_data["content"])) {
                this.content = [] as any;
                for (let item of _data["content"])
                    this.content!.push(AssetDTO.fromJS(item));
            }
            this.pageable = _data["pageable"] ? PageableLite.fromJS(_data["pageable"]) : new PageableLite();
        }
    }

    static fromJS(data: any): PageableImplAssetDTO {
        data = typeof data === 'object' ? data : {};
        let result = new PageableImplAssetDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        if (Array.isArray(this.content)) {
            data["content"] = [];
            for (let item of this.content)
                data["content"].push(item.toJSON());
        }
        data["pageable"] = this.pageable ? this.pageable.toJSON() : <any>undefined;
        return data;
    }

    clone(): PageableImplAssetDTO {
        const json = this.toJSON();
        let result = new PageableImplAssetDTO();
        result.init(json);
        return result;
    }
}

export interface IPageableImplAssetDTO {
    content: AssetDTO[];
    pageable: PageableLite;

    [key: string]: any;
}

export class GateUserResponseDTO implements IGateUserResponseDTO {
    username!: string;
    identifier!: string;
    created!: number;
    avatar?: string;
    bio?: string;
    wallet?: WalletExtDTO;

    [key: string]: any;

    constructor(data?: IGateUserResponseDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.username = _data["username"];
            this.identifier = _data["identifier"];
            this.created = _data["created"];
            this.avatar = _data["avatar"];
            this.bio = _data["bio"];
            this.wallet = _data["wallet"] ? WalletExtDTO.fromJS(_data["wallet"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GateUserResponseDTO {
        data = typeof data === 'object' ? data : {};
        let result = new GateUserResponseDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["username"] = this.username;
        data["identifier"] = this.identifier;
        data["created"] = this.created;
        data["avatar"] = this.avatar;
        data["bio"] = this.bio;
        data["wallet"] = this.wallet ? this.wallet.toJSON() : <any>undefined;
        return data;
    }

    clone(): GateUserResponseDTO {
        const json = this.toJSON();
        let result = new GateUserResponseDTO();
        result.init(json);
        return result;
    }
}

export interface IGateUserResponseDTO {
    username: string;
    identifier: string;
    created: number;
    avatar?: string;
    bio?: string;
    wallet?: WalletExtDTO;

    [key: string]: any;
}

export class WalletExtDTO implements IWalletExtDTO {
    address!: string;
    balance!: number;

    [key: string]: any;

    constructor(data?: IWalletExtDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.address = _data["address"];
            this.balance = _data["balance"];
        }
    }

    static fromJS(data: any): WalletExtDTO {
        data = typeof data === 'object' ? data : {};
        let result = new WalletExtDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["address"] = this.address;
        data["balance"] = this.balance;
        return data;
    }

    clone(): WalletExtDTO {
        const json = this.toJSON();
        let result = new WalletExtDTO();
        result.init(json);
        return result;
    }
}

export interface IWalletExtDTO {
    address: string;
    balance: number;

    [key: string]: any;
}

export class BurnAssetRequestDTO implements IBurnAssetRequestDTO {
    /** 
        Optional. Amount of burning assets (for SFT). Default = 1
     */
    amount?: number;
    type!: AssetType;
    /** 
        (Required for SFT). Asset owner address
     */
    ownerAddress?: string;

    [key: string]: any;

    constructor(data?: IBurnAssetRequestDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.amount = _data["amount"];
            this.type = _data["type"];
            this.ownerAddress = _data["ownerAddress"];
        }
    }

    static fromJS(data: any): BurnAssetRequestDTO {
        data = typeof data === 'object' ? data : {};
        let result = new BurnAssetRequestDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["amount"] = this.amount;
        data["type"] = this.type;
        data["ownerAddress"] = this.ownerAddress;
        return data;
    }

    clone(): BurnAssetRequestDTO {
        const json = this.toJSON();
        let result = new BurnAssetRequestDTO();
        result.init(json);
        return result;
    }
}

export interface IBurnAssetRequestDTO {
    /** 
        Optional. Amount of burning assets (for SFT). Default = 1
     */
    amount?: number;
    type: AssetType;
    /** 
        (Required for SFT). Asset owner address
     */
    ownerAddress?: string;

    [key: string]: any;
}

export enum AssetType {
    SFT = "SFT",
    NFT = "NFT",
    JETTON = "JETTON",
}

export enum ErrorDetailResponseType {
    SOMETHING_WENT_WRONG = "SOMETHING_WENT_WRONG",
    ACCESS_DENIED = "ACCESS_DENIED",
    OBJECT_ALREADY_EXISTS = "OBJECT_ALREADY_EXISTS",
    SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE",
    OBJECT_NOT_FOUND = "OBJECT_NOT_FOUND",
    WRONG_API_USAGE = "WRONG_API_USAGE",
    TOO_MANY_REQUESTS = "TOO_MANY_REQUESTS",
    UNAUTHORIZED = "UNAUTHORIZED",
    BAD_REQUEST = "BAD_REQUEST",
    TEMPORARY_UNAVAILABLE = "TEMPORARY_UNAVAILABLE",
    WRONG_MEDIA_TYPE = "WRONG_MEDIA_TYPE",
    UNKNOWN_MEDIA_PATH = "UNKNOWN_MEDIA_PATH",
    MAX_UPLOAD_SIZE_EXCEEDED = "MAX_UPLOAD_SIZE_EXCEEDED",
    MAX_FILES_COUNT_EXCEEDED = "MAX_FILES_COUNT_EXCEEDED",
    WRONG_MEDIA_URL = "WRONG_MEDIA_URL",
    USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS",
    USERNAME_TOO_SHORT = "USERNAME_TOO_SHORT",
    USERNAME_TOO_LONG = "USERNAME_TOO_LONG",
    USERNAME_CONTAINS_CENSURE = "USERNAME_CONTAINS_CENSURE",
    USERNAME_CONTAINS_UNAVAILABLE_CHARACTERS = "USERNAME_CONTAINS_UNAVAILABLE_CHARACTERS",
    CENSURE = "CENSURE",
    TOO_LONG_DATA = "TOO_LONG_DATA",
    TONKEEPER_PROBLEM = "TONKEEPER_PROBLEM",
    WALLET_IN_USE = "WALLET_IN_USE",
    TASK_CANNOT_BE_RUN = "TASK_CANNOT_BE_RUN",
    LONG_RUNNING_TASK = "LONG_RUNNING_TASK",
    DELAYED_MESSAGE_ALREADY_SENT = "DELAYED_MESSAGE_ALREADY_SENT",
    EXPECTED_ACTION_ALREADY_PROCESSED = "EXPECTED_ACTION_ALREADY_PROCESSED",
    CONTEST_CREATION_ERROR = "CONTEST_CREATION_ERROR",
    ITEM_NOF_FOUND_ON_SALE = "ITEM_NOF_FOUND_ON_SALE",
    ITEM_ALREADY_SOLD = "ITEM_ALREADY_SOLD",
    NOT_ENOUGH_ASSETS = "NOT_ENOUGH_ASSETS",
    INVITE_CODE_IS_INVALID = "INVITE_CODE_IS_INVALID",
    INVITE_CODE_IS_EXPIRED = "INVITE_CODE_IS_EXPIRED",
    TEAM_IS_FULL = "TEAM_IS_FULL",
    USER_IS_IN_THE_TEAM = "USER_IS_IN_THE_TEAM",
    GAME_IS_ON_MODERATION = "GAME_IS_ON_MODERATION",
    GAME_IS_UNCHANGED = "GAME_IS_UNCHANGED",
    GAME_ROYALTY_ADDRESS_IS_EMPTY = "GAME_ROYALTY_ADDRESS_IS_EMPTY",
    GAME_TITLE_IS_EMPTY = "GAME_TITLE_IS_EMPTY",
    GAME_IS_NOT_ACTIVE = "GAME_IS_NOT_ACTIVE",
    GAME_IS_DELETED = "GAME_IS_DELETED",
    GAME_PLAY_URL_IS_EMPTY = "GAME_PLAY_URL_IS_EMPTY",
    GAME_COVER_IS_EMPTY = "GAME_COVER_IS_EMPTY",
    GAME_IMAGES_HAS_INVALID_SIZE = "GAME_IMAGES_HAS_INVALID_SIZE",
    COLLECTION_IS_DEPLOYED = "COLLECTION_IS_DEPLOYED",
    COLLECTION_IS_NOT_DEPLOYED = "COLLECTION_IS_NOT_DEPLOYED",
    COLLECTION_IS_LOCKED = "COLLECTION_IS_LOCKED",
    COLLECTION_NAME_IS_EMPTY = "COLLECTION_NAME_IS_EMPTY",
    COLLECTION_CATEGORY_IS_EMPTY = "COLLECTION_CATEGORY_IS_EMPTY",
    COLLECTION_TYPE_IS_EMPTY = "COLLECTION_TYPE_IS_EMPTY",
    COLLECTION_MAX_SUPPLY_IS_INVALID = "COLLECTION_MAX_SUPPLY_IS_INVALID",
    COLLECTION_AVATAR_IS_EMPTY = "COLLECTION_AVATAR_IS_EMPTY",
    COLLECTION_OVERFLOW = "COLLECTION_OVERFLOW",
    CONTRACT_IS_DEPLOYED = "CONTRACT_IS_DEPLOYED",
    CONTRACT_IS_LOCKED = "CONTRACT_IS_LOCKED",
    CONTRACT_NAME_IS_EMPTY = "CONTRACT_NAME_IS_EMPTY",
    CONTRACT_IMAGE_IS_EMPTY = "CONTRACT_IMAGE_IS_EMPTY",
    CONTRACT_MAX_SUPPLY_IS_INVALID = "CONTRACT_MAX_SUPPLY_IS_INVALID",
    TEAM_WALLET_INSUFFICIENT_FUNDS = "TEAM_WALLET_INSUFFICIENT_FUNDS",
    TEAM_WALLET_DOES_NOT_OWN_COLLECTION = "TEAM_WALLET_DOES_NOT_OWN_COLLECTION",
    TEAM_WALLET_IS_USED = "TEAM_WALLET_IS_USED",
    ASSET_IDS_IS_EMPTY = "ASSET_IDS_IS_EMPTY",
    ASSETS_BELONG_TO_DIFFERENT_GAMES = "ASSETS_BELONG_TO_DIFFERENT_GAMES",
}

export enum AssetMarketDetailsStatus {
    ON_SALE = "ON_SALE",
    CANCEL = "CANCEL",
    SOLD = "SOLD",
    TRANSITION_BUY = "TRANSITION_BUY",
    TRANSITION_SALE = "TRANSITION_SALE",
    TRANSITION_CANCEL = "TRANSITION_CANCEL",
    TRANSITION = "TRANSITION",
    UPDATED = "UPDATED",
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}