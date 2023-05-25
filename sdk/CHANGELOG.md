# Changelog

## [0.2.0](https://github.com/ton-play/tonplay-typescript-sdk/commit/ba285a136f6656d2c4f3aaeff8e14b1054ffb7d6) (2023-05-25)

### ⚠️ BREAKING CHANGES

* DTOs are separated
* Changed some input & return objects:
    * `saleCancel()` gets `CancelItemRequestDTO`
    * market operations(`buy()`, `putOnSale()`, etc.) return `DeeplinkResponseDTO` instead of `AssetDeployResponseDTO`