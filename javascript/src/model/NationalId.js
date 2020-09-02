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
    root.KhIdentityVerification.NationalId = factory(root.KhIdentityVerification.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The NationalId model module.
   * @module model/NationalId
   * @version 1.0.0-alpha.2
   */

  /**
   * Constructs a new <code>NationalId</code>.
   * @alias module:model/NationalId
   * @class
   * @param _number {String} 
   * @param type {String} Supported Types: NationalID, Health, SocialService, TaxIDNumber.
   */
  var exports = function(_number, type) {
    var _this = this;

    _this['Number'] = _number;
    _this['Type'] = type;
  };

  /**
   * Constructs a <code>NationalId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NationalId} obj Optional instance to populate.
   * @return {module:model/NationalId} The populated <code>NationalId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Number')) {
        obj['Number'] = ApiClient.convertToType(data['Number'], 'String');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('DistrictOfIssue')) {
        obj['DistrictOfIssue'] = ApiClient.convertToType(data['DistrictOfIssue'], 'String');
      }
      if (data.hasOwnProperty('CityOfIssue')) {
        obj['CityOfIssue'] = ApiClient.convertToType(data['CityOfIssue'], 'String');
      }
      if (data.hasOwnProperty('ProvinceOfIssue')) {
        obj['ProvinceOfIssue'] = ApiClient.convertToType(data['ProvinceOfIssue'], 'String');
      }
      if (data.hasOwnProperty('CountyOfIssue')) {
        obj['CountyOfIssue'] = ApiClient.convertToType(data['CountyOfIssue'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Number
   */
  exports.prototype['Number'] = undefined;
  /**
   * Supported Types: NationalID, Health, SocialService, TaxIDNumber.
   * @member {String} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * District that issued the ID.
   * @member {String} DistrictOfIssue
   */
  exports.prototype['DistrictOfIssue'] = undefined;
  /**
   * City that issued the ID.
   * @member {String} CityOfIssue
   */
  exports.prototype['CityOfIssue'] = undefined;
  /**
   * Province that issued the ID.
   * @member {String} ProvinceOfIssue
   */
  exports.prototype['ProvinceOfIssue'] = undefined;
  /**
   * County that issued the ID.
   * @member {String} CountyOfIssue
   */
  exports.prototype['CountyOfIssue'] = undefined;



  return exports;
}));

