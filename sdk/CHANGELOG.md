# Changelog

## [0.2.0] (2023-05-25)

### ⚠️ BREAKING CHANGES

* DTOs are separated
* Changed some input & return objects:
    * `saleCancel()` gets `CancelItemRequestDTO`
    * market operations(`buy()`, `putOnSale()`, etc.) return `DeeplinkResponseDTO` instead of `AssetDeployResponseDTO`