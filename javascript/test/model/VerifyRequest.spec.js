/**
 * kh_identity_verification
 * To run tests transactions on our trial endpoint in postman: [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: 1.0.0-alpha.2
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KhIdentityVerification);
  }
}(this, function(expect, KhIdentityVerification) {
  'use strict';

  var instance;

  beforeEach(function() {
    // create a new instance
    //instance = new KhIdentityVerification.VerifyRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VerifyRequest', function() {
    it('should create an instance of VerifyRequest', function() {
      // uncomment below and update the code to test VerifyRequest
      //var instance = new KhIdentityVerification.VerifyRequest();
      //expect(instance).to.be.a(KhIdentityVerification.VerifyRequest);
    });

    it('should have the property acceptTruliooTermsAndConditions (base name: "AcceptTruliooTermsAndConditions")', function() {
      // uncomment below and update the code to test the property acceptTruliooTermsAndConditions
      //var instance = new KhIdentityVerification.VerifyRequest();
      //expect(instance).to.be();
    });

    it('should have the property callBackUrl (base name: "CallBackUrl")', function() {
      // uncomment below and update the code to test the property callBackUrl
      //var instance = new KhIdentityVerification.VerifyRequest();
      //expect(instance).to.be();
    });

    it('should have the property timeout (base name: "Timeout")', function() {
      // uncomment below and update the code to test the property timeout
      //var instance = new KhIdentityVerification.VerifyRequest();
      //expect(instance).to.be();
    });

    it('should have the property cleansedAddress (base name: "CleansedAddress")', function() {
      // uncomment below and update the code to test the property cleansedAddress
      //var instance = new KhIdentityVerification.VerifyRequest();
      //expect(instance).to.be();
    });

    it('should have the property configurationName (base name: "ConfigurationName")', function() {
      // uncomment below and update the code to test the property configurationName
      //var instance = new KhIdentityVerification.VerifyRequest();
      //expect(instance).to.be();
    });

    it('should have the property consentForDataSources (base name: "ConsentForDataSources")', function() {
      // uncomment below and update the code to test the property consentForDataSources
      //var instance = new KhIdentityVerification.VerifyRequest();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "CountryCode")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instance = new KhIdentityVerification.VerifyRequest();
      //expect(instance).to.be();
    });

    it('should have the property customerReferenceID (base name: "CustomerReferenceID")', function() {
      // uncomment below and update the code to test the property customerReferenceID
      //var instance = new KhIdentityVerification.VerifyRequest();
      //expect(instance).to.be();
    });

    it('should have the property dataFields (base name: "DataFields")', function() {
      // uncomment below and update the code to test the property dataFields
      //var instance = new KhIdentityVerification.VerifyRequest();
      //expect(instance).to.be();
    });

    it('should have the property verboseMode (base name: "VerboseMode")', function() {
      // uncomment below and update the code to test the property verboseMode
      //var instance = new KhIdentityVerification.VerifyRequest();
      //expect(instance).to.be();
    });

  });

}));
