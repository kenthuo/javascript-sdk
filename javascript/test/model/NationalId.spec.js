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
    //instance = new KhIdentityVerification.NationalId();
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

  describe('NationalId', function() {
    it('should create an instance of NationalId', function() {
      // uncomment below and update the code to test NationalId
      //var instance = new KhIdentityVerification.NationalId();
      //expect(instance).to.be.a(KhIdentityVerification.NationalId);
    });

    it('should have the property _number (base name: "Number")', function() {
      // uncomment below and update the code to test the property _number
      //var instance = new KhIdentityVerification.NationalId();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "Type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new KhIdentityVerification.NationalId();
      //expect(instance).to.be();
    });

    it('should have the property districtOfIssue (base name: "DistrictOfIssue")', function() {
      // uncomment below and update the code to test the property districtOfIssue
      //var instance = new KhIdentityVerification.NationalId();
      //expect(instance).to.be();
    });

    it('should have the property cityOfIssue (base name: "CityOfIssue")', function() {
      // uncomment below and update the code to test the property cityOfIssue
      //var instance = new KhIdentityVerification.NationalId();
      //expect(instance).to.be();
    });

    it('should have the property provinceOfIssue (base name: "ProvinceOfIssue")', function() {
      // uncomment below and update the code to test the property provinceOfIssue
      //var instance = new KhIdentityVerification.NationalId();
      //expect(instance).to.be();
    });

    it('should have the property countyOfIssue (base name: "CountyOfIssue")', function() {
      // uncomment below and update the code to test the property countyOfIssue
      //var instance = new KhIdentityVerification.NationalId();
      //expect(instance).to.be();
    });

  });

}));
