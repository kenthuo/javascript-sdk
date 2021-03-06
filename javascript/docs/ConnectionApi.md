# KhIdentityVerification.ConnectionApi

All URIs are relative to *https://gateway.trulioo.com/trial*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testAuthentication**](ConnectionApi.md#testAuthentication) | **GET** /connection/v1/testauthentication | Test Authentication



## testAuthentication

> String testAuthentication()

Test Authentication

This method enables you to check if your credentials are valid. You will need to use ApiKeyAuth authentication to ensure a successful response.

### Example

```javascript
var KhIdentityVerification = require('kh_identity_verification');
var defaultClient = KhIdentityVerification.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new KhIdentityVerification.ConnectionApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testAuthentication(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json

