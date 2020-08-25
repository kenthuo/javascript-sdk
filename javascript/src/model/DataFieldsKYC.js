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
import Communication from './Communication';
import DriverLicence from './DriverLicence';
import Location from './Location';
import NationalId from './NationalId';
import Passport from './Passport';
import PersonInfo from './PersonInfo';

/**
 * The DataFieldsKYC model module.
 * @module model/DataFieldsKYC
 * @version 1.0.0-alpha.2
 */
class DataFieldsKYC {
    /**
     * Constructs a new <code>DataFieldsKYC</code>.
     * The data field name-value pairs for the data elements on which the verification is to be performed
     * @alias module:model/DataFieldsKYC
     */
    constructor() { 
        
        DataFieldsKYC.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataFieldsKYC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataFieldsKYC} obj Optional instance to populate.
     * @return {module:model/DataFieldsKYC} The populated <code>DataFieldsKYC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataFieldsKYC();

            if (data.hasOwnProperty('PersonInfo')) {
                obj['PersonInfo'] = PersonInfo.constructFromObject(data['PersonInfo']);
            }
            if (data.hasOwnProperty('Location')) {
                obj['Location'] = Location.constructFromObject(data['Location']);
            }
            if (data.hasOwnProperty('Communication')) {
                obj['Communication'] = Communication.constructFromObject(data['Communication']);
            }
            if (data.hasOwnProperty('DriverLicence')) {
                obj['DriverLicence'] = DriverLicence.constructFromObject(data['DriverLicence']);
            }
            if (data.hasOwnProperty('NationalIds')) {
                obj['NationalIds'] = ApiClient.convertToType(data['NationalIds'], [NationalId]);
            }
            if (data.hasOwnProperty('Passport')) {
                obj['Passport'] = Passport.constructFromObject(data['Passport']);
            }
            if (data.hasOwnProperty('CountrySpecific')) {
                obj['CountrySpecific'] = ApiClient.convertToType(data['CountrySpecific'], {'String': {'String': 'String'}});
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PersonInfo} PersonInfo
 */
DataFieldsKYC.prototype['PersonInfo'] = undefined;

/**
 * @member {module:model/Location} Location
 */
DataFieldsKYC.prototype['Location'] = undefined;

/**
 * @member {module:model/Communication} Communication
 */
DataFieldsKYC.prototype['Communication'] = undefined;

/**
 * @member {module:model/DriverLicence} DriverLicence
 */
DataFieldsKYC.prototype['DriverLicence'] = undefined;

/**
 * National Identification Information. Supported Types: NationalID, Health, SocialService, TaxIDNumber.  See <a class=\"link-to-api\" href=\"https://developer.trulioo.com/docs/national-ids-supported-types\">Supported NationalIDs</a> to understand the Type to send with the ID number.
 * @member {Array.<module:model/NationalId>} NationalIds
 */
DataFieldsKYC.prototype['NationalIds'] = undefined;

/**
 * @member {module:model/Passport} Passport
 */
DataFieldsKYC.prototype['Passport'] = undefined;

/**
 * CountrySpecific fields  \"CountryCode\": {   \"Field1\" : \"Value\",   \"Field2\" : \"Value\"  }  Call <a class=\"link-to-api\" href=\"#getfields-2\">Get Fields</a> to get the list of fields that are valid for your configuration.
 * @member {Object.<String, Object.<String, String>>} CountrySpecific
 */
DataFieldsKYC.prototype['CountrySpecific'] = undefined;






export default DataFieldsKYC;

