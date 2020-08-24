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

import ApiClient from '../ApiClient';

/**
 * The DriverLicence model module.
 * @module model/DriverLicence
 * @version 1.0.0-alpha.1
 */
class DriverLicence {
    /**
     * Constructs a new <code>DriverLicence</code>.
     * @alias module:model/DriverLicence
     */
    constructor() { 
        
        DriverLicence.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DriverLicence</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DriverLicence} obj Optional instance to populate.
     * @return {module:model/DriverLicence} The populated <code>DriverLicence</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DriverLicence();

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


}

/**
 * Driver's Licence Number of the individual to be verified.
 * @member {String} Number
 */
DriverLicence.prototype['Number'] = undefined;

/**
 * State of issue for driver's Licence.
 * @member {String} State
 */
DriverLicence.prototype['State'] = undefined;

/**
 * Driver's Licence day of expiry of the individual to be verified.
 * @member {Number} DayOfExpiry
 */
DriverLicence.prototype['DayOfExpiry'] = undefined;

/**
 * Driver's Licence month of expiry of the individual to be verified.
 * @member {Number} MonthOfExpiry
 */
DriverLicence.prototype['MonthOfExpiry'] = undefined;

/**
 * Driver's Licence year of expiry of the individual to be verified.
 * @member {Number} YearOfExpiry
 */
DriverLicence.prototype['YearOfExpiry'] = undefined;






export default DriverLicence;

