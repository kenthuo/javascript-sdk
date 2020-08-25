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

import ApiClient from '../ApiClient';

/**
 * The RecordRule model module.
 * @module model/RecordRule
 * @version 1.0.0-alpha.2
 */
class RecordRule {
    /**
     * Constructs a new <code>RecordRule</code>.
     * RecordRule used for the transaction.
     * @alias module:model/RecordRule
     */
    constructor() { 
        
        RecordRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecordRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecordRule} obj Optional instance to populate.
     * @return {module:model/RecordRule} The populated <code>RecordRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecordRule();

            if (data.hasOwnProperty('RuleName')) {
                obj['RuleName'] = ApiClient.convertToType(data['RuleName'], 'String');
            }
            if (data.hasOwnProperty('Note')) {
                obj['Note'] = ApiClient.convertToType(data['Note'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of RecordRule.
 * @member {String} RuleName
 */
RecordRule.prototype['RuleName'] = undefined;

/**
 * Rule Description.
 * @member {String} Note
 */
RecordRule.prototype['Note'] = undefined;






export default RecordRule;

