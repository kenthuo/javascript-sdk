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
    root.KhIdentityVerification.Passport = factory(root.KhIdentityVerification.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Passport model module.
   * @module model/Passport
   * @version 1.0.0-alpha.2
   */

  /**
   * Constructs a new <code>Passport</code>.
   * @alias module:model/Passport
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Passport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Passport} obj Optional instance to populate.
   * @return {module:model/Passport} The populated <code>Passport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Mrz1')) {
        obj['Mrz1'] = ApiClient.convertToType(data['Mrz1'], 'String');
      }
      if (data.hasOwnProperty('Mrz2')) {
        obj['Mrz2'] = ApiClient.convertToType(data['Mrz2'], 'String');
      }
      if (data.hasOwnProperty('Number')) {
        obj['Number'] = ApiClient.convertToType(data['Number'], 'String');
      }
      if (data.hasOwnProperty('DayOfExpiry')) {
        obj['DayOfExpiry'] = ApiClient.convertToType(data['DayOfExpiry'], 'Number');
      }
      if (data.hasOwnProperty('MonthOfExpiry')) {
        obj['MonthOfExpiry'] = ApiClient.convertToType(data['MonthOfExpiry'], 'Number');
      }
      if (data.hasOwnProperty('YearOfExpiry')) {
        obj['YearOfExpiry'] = ApiClient.convertToType(data['YearOfExpiry'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Line 1 of the passport MRZ.
   * @member {String} Mrz1
   */
  exports.prototype['Mrz1'] = undefined;
  /**
   * Line 2 of the passport MRZ.
   * @member {String} Mrz2
   */
  exports.prototype['Mrz2'] = undefined;
  /**
   * Passport Number.
   * @member {String} Number
   */
  exports.prototype['Number'] = undefined;
  /**
   * Passport's Licence day of expiry of the individual to be verified.
   * @member {Number} DayOfExpiry
   */
  exports.prototype['DayOfExpiry'] = undefined;
  /**
   * Passport's Licence month of expiry of the individual to be verified.
   * @member {Number} MonthOfExpiry
   */
  exports.prototype['MonthOfExpiry'] = undefined;
  /**
   * Passport's Licence year of expiry of the individual to be verified.
   * @member {Number} YearOfExpiry
   */
  exports.prototype['YearOfExpiry'] = undefined;



  return exports;
}));

