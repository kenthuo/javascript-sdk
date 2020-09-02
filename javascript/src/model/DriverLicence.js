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
    root.KhIdentityVerification.DriverLicence = factory(root.KhIdentityVerification.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The DriverLicence model module.
   * @module model/DriverLicence
   * @version 1.0.0-alpha.2
   */

  /**
   * Constructs a new <code>DriverLicence</code>.
   * @alias module:model/DriverLicence
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>DriverLicence</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DriverLicence} obj Optional instance to populate.
   * @return {module:model/DriverLicence} The populated <code>DriverLicence</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Number')) {
        obj['Number'] = ApiClient.convertToType(data['Number'], 'String');
      }
      if (data.hasOwnProperty('State')) {
        obj['State'] = ApiClient.convertToType(data['State'], 'String');
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
   * Driver's Licence Number of the individual to be verified.
   * @member {String} Number
   */
  exports.prototype['Number'] = undefined;
  /**
   * State of issue for driver's Licence.
   * @member {String} State
   */
  exports.prototype['State'] = undefined;
  /**
   * Driver's Licence day of expiry of the individual to be verified.
   * @member {Number} DayOfExpiry
   */
  exports.prototype['DayOfExpiry'] = undefined;
  /**
   * Driver's Licence month of expiry of the individual to be verified.
   * @member {Number} MonthOfExpiry
   */
  exports.prototype['MonthOfExpiry'] = undefined;
  /**
   * Driver's Licence year of expiry of the individual to be verified.
   * @member {Number} YearOfExpiry
   */
  exports.prototype['YearOfExpiry'] = undefined;



  return exports;
}));

