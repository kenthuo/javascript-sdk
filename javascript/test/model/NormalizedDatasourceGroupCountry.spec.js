/**
 * kh_identity_verification
 * To run tests transactions on our trial endpoint in postman: [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: 1.0.0-alpha.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
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
    instance = new KhIdentityVerification.NormalizedDatasourceGroupCountry();
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

  describe('NormalizedDatasourceGroupCountry', function() {
    it('should create an instance of NormalizedDatasourceGroupCountry', function() {
      // uncomment below and update the code to test NormalizedDatasourceGroupCountry
      //var instane = new KhIdentityVerification.NormalizedDatasourceGroupCountry();
      //expect(instance).to.be.a(KhIdentityVerification.NormalizedDatasourceGroupCountry);
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KhIdentityVerification.NormalizedDatasourceGroupCountry();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new KhIdentityVerification.NormalizedDatasourceGroupCountry();
      //expect(instance).to.be();
    });

    it('should have the property requiredFields (base name: "RequiredFields")', function() {
      // uncomment below and update the code to test the property requiredFields
      //var instane = new KhIdentityVerification.NormalizedDatasourceGroupCountry();
      //expect(instance).to.be();
    });

    it('should have the property optionalFields (base name: "OptionalFields")', function() {
      // uncomment below and update the code to test the property optionalFields
      //var instane = new KhIdentityVerification.NormalizedDatasourceGroupCountry();
      //expect(instance).to.be();
    });

    it('should have the property appendedFields (base name: "AppendedFields")', function() {
      // uncomment below and update the code to test the property appendedFields
      //var instane = new KhIdentityVerification.NormalizedDatasourceGroupCountry();
      //expect(instance).to.be();
    });

    it('should have the property outputFields (base name: "OutputFields")', function() {
      // uncomment below and update the code to test the property outputFields
      //var instane = new KhIdentityVerification.NormalizedDatasourceGroupCountry();
      //expect(instance).to.be();
    });

    it('should have the property sourceType (base name: "SourceType")', function() {
      // uncomment below and update the code to test the property sourceType
      //var instane = new KhIdentityVerification.NormalizedDatasourceGroupCountry();
      //expect(instance).to.be();
    });

    it('should have the property updateFrequency (base name: "UpdateFrequency")', function() {
      // uncomment below and update the code to test the property updateFrequency
      //var instane = new KhIdentityVerification.NormalizedDatasourceGroupCountry();
      //expect(instance).to.be();
    });

    it('should have the property coverage (base name: "Coverage")', function() {
      // uncomment below and update the code to test the property coverage
      //var instane = new KhIdentityVerification.NormalizedDatasourceGroupCountry();
      //expect(instance).to.be();
    });

  });

}));