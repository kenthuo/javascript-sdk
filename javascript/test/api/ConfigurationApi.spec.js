/**
 * kh_identity_verification
 * To run tests transactions on our trial endpoint in postman: [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62) 
 *
 * The version of the OpenAPI document: 1.0.0-alpha.2
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
    instance = new KhIdentityVerification.ConfigurationApi();
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

  describe('ConfigurationApi', function() {
    describe('getConsents', function() {
      it('should call getConsents successfully', function(done) {
        //uncomment below and update the code to test getConsents
        //instance.getConsents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCountryCodes', function() {
      it('should call getCountryCodes successfully', function(done) {
        //uncomment below and update the code to test getCountryCodes
        //instance.getCountryCodes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCountrySubdivisions', function() {
      it('should call getCountrySubdivisions successfully', function(done) {
        //uncomment below and update the code to test getCountrySubdivisions
        //instance.getCountrySubdivisions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDatasources', function() {
      it('should call getDatasources successfully', function(done) {
        //uncomment below and update the code to test getDatasources
        //instance.getDatasources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDetailedConsents', function() {
      it('should call getDetailedConsents successfully', function(done) {
        //uncomment below and update the code to test getDetailedConsents
        //instance.getDetailedConsents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFields', function() {
      it('should call getFields successfully', function(done) {
        //uncomment below and update the code to test getFields
        //instance.getFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecommendedFields', function() {
      it('should call getRecommendedFields successfully', function(done) {
        //uncomment below and update the code to test getRecommendedFields
        //instance.getRecommendedFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTestEntities', function() {
      it('should call getTestEntities successfully', function(done) {
        //uncomment below and update the code to test getTestEntities
        //instance.getTestEntities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
