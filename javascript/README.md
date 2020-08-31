# kh_identity_verification

KhIdentityVerification - JavaScript client for kh_identity_verification

- APIs version: 1.0.0-alpha.2
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Then install it via:

```shell
npm install kh_identity_verification --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var KhIdentityVerification = require('kh_identity_verification');

var defaultClient = KhIdentityVerification.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['x-trulioo-api-key'] = "Token"

var api = new KhIdentityVerification.ConfigurationApi()
var countryCode = "countryCode_example"; // {String} Country alpha2 code
var configurationName = "'Identity Verification'"; // {String} The product configuration. Currently \"Identity Verification\" for all products.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getConsents(countryCode, configurationName, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://gateway.trulioo.com/trial*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*KhIdentityVerification.ConfigurationApi* | [**getConsents**](docs/ConfigurationApi.md#getConsents) | **GET** /configuration/v1/consents/{configurationName}/{countryCode} | Get Consents
*KhIdentityVerification.ConfigurationApi* | [**getCountryCodes**](docs/ConfigurationApi.md#getCountryCodes) | **GET** /configuration/v1/countrycodes/{configurationName} | Get Country Codes
*KhIdentityVerification.ConfigurationApi* | [**getCountrySubdivisions**](docs/ConfigurationApi.md#getCountrySubdivisions) | **GET** /configuration/v1/countrysubdivisions/{countryCode} | Get Country Subdivisions
*KhIdentityVerification.ConfigurationApi* | [**getDatasources**](docs/ConfigurationApi.md#getDatasources) | **GET** /configuration/v1/datasources/{configurationName}/{countryCode} | Get Datasources
*KhIdentityVerification.ConfigurationApi* | [**getDetailedConsents**](docs/ConfigurationApi.md#getDetailedConsents) | **GET** /configuration/v1/detailedConsents/{configurationName}/{countryCode} | Get Detailed Consents
*KhIdentityVerification.ConfigurationApi* | [**getFields**](docs/ConfigurationApi.md#getFields) | **GET** /configuration/v1/fields/{configurationName}/{countryCode} | Get Fields
*KhIdentityVerification.ConfigurationApi* | [**getRecommendedFields**](docs/ConfigurationApi.md#getRecommendedFields) | **GET** /configuration/v1/recommendedfields/{configurationName}/{countryCode} | Get Recommended Fields
*KhIdentityVerification.ConfigurationApi* | [**getTestEntities**](docs/ConfigurationApi.md#getTestEntities) | **GET** /configuration/v1/testentities/{configurationName}/{countryCode} | Get Test Entities
*KhIdentityVerification.ConnectionApi* | [**testAuthentication**](docs/ConnectionApi.md#testAuthentication) | **GET** /connection/v1/testauthentication | Test Authentication
*KhIdentityVerification.VerificationsApi* | [**getTransactionRecord**](docs/VerificationsApi.md#getTransactionRecord) | **GET** /verifications/v1/transactionrecord/{id} | Get Transaction Record
*KhIdentityVerification.VerificationsApi* | [**verify**](docs/VerificationsApi.md#verify) | **POST** /verifications/v1/verify | Verify




### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: x-trulioo-api-key
- **Location**: HTTP header

