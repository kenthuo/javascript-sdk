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
    root.KhIdentityVerification.ServiceError = factory(root.KhIdentityVerification.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ServiceError model module.
   * @module model/ServiceError
   * @version 1.0.0-alpha.2
   */

  /**
   * Constructs a new <code>ServiceError</code>.
   * @alias module:model/ServiceError
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ServiceError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceError} obj Optional instance to populate.
   * @return {module:model/ServiceError} The populated <code>ServiceError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Code')) {
        obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
      }
      if (data.hasOwnProperty('Message')) {
        obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Code
   */
  exports.prototype['Code'] = undefined;
  /**
   * @member {String} Message
   */
  exports.prototype['Message'] = undefined;



  return exports;
}));


