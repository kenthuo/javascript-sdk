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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KhIdentityVerification) {
      root.KhIdentityVerification = {};
    }
    root.KhIdentityVerification.CountrySubdivision = factory(root.KhIdentityVerification.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CountrySubdivision model module.
   * @module model/CountrySubdivision
   * @version 1.0.0-alpha.2
   */

  /**
   * Constructs a new <code>CountrySubdivision</code>.
   * ISO 3166-2 break down of the country
   * @alias module:model/CountrySubdivision
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CountrySubdivision</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CountrySubdivision} obj Optional instance to populate.
   * @return {module:model/CountrySubdivision} The populated <code>CountrySubdivision</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Code')) {
        obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
      }
      if (data.hasOwnProperty('ParentCode')) {
        obj['ParentCode'] = ApiClient.convertToType(data['ParentCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the area, in english or one of the languages of the country
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * Code for the area
   * @member {String} Code
   */
  exports.prototype['Code'] = undefined;
  /**
   * Code of the parent entity
   * @member {String} ParentCode
   */
  exports.prototype['ParentCode'] = undefined;



  return exports;
}));

