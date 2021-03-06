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
    root.KhIdentityVerification.RecordRule = factory(root.KhIdentityVerification.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The RecordRule model module.
   * @module model/RecordRule
   * @version 1.0.0-alpha.2
   */

  /**
   * Constructs a new <code>RecordRule</code>.
   * RecordRule used for the transaction.
   * @alias module:model/RecordRule
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>RecordRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecordRule} obj Optional instance to populate.
   * @return {module:model/RecordRule} The populated <code>RecordRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('RuleName')) {
        obj['RuleName'] = ApiClient.convertToType(data['RuleName'], 'String');
      }
      if (data.hasOwnProperty('Note')) {
        obj['Note'] = ApiClient.convertToType(data['Note'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of RecordRule.
   * @member {String} RuleName
   */
  exports.prototype['RuleName'] = undefined;
  /**
   * Rule Description.
   * @member {String} Note
   */
  exports.prototype['Note'] = undefined;



  return exports;
}));


