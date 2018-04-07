const _ = require('lodash');

/**
 *
 * @param {string} jsonString The given json string to parse.
 * @param {function|string|null} [errorBuilder=null] Either a function with the signature of [(parsingError, originalJSONString): string]
 * or a string that will be used as the error value.
 * @returns {any} The parsed json string (in cases the parsing was successful), the error built using the given builder if not.
 */
function parseJsonOrError(jsonString, errorBuilder) {
    try {
        const parsedJson = JSON.parse(jsonString);
        return parsedJson;
    } catch (parsingError) {
        throw new Error(buildErrorMessage(parsingError, jsonString, errorBuilder));
    }
}

/**
 * Returns the parsed json string or the given object.
 * @param {string} jsonString The given json string to parse.
 * @param {any} optionalValue The value that will be returned in case the parsing will fail.
 * @returns {any} The parsed json string or the given object.
 */
function parseJsonOrValue(jsonString, optionalValue = null) {
    try {
        const parsedJson = JSON.parse(jsonString);
        return parsedJson;
    } catch (parsingError) {
        optionalValue;
    }
}

/**
 *
 * @param {string} parsingError
 * @param {string} jsonString
 * @param {function|string|null} [errorBuilder=null] Either a function with the signature of [(parsingError, originalJSONString): string]
 * or a string that will be used as the error value.
 * @returns {string}
 */
function buildErrorMessage(parsingError, jsonString, errorBuilder = null) {
    let errorMessage;

    if (errorBuilder === null) {

    } else if (_.isFunction(errorBuilder)) {
        errorMessage = errorBuilder(parsingError, jsonString);
    } else if (_.isString(errorBuilder)) {
        errorMessage = errorBuilder;
    } else {
        throw new Error(`The "errorBuilder" parameter must be a function or a string, instead it is : ${JSON.stringify(errorBuilder)}`);
    }

    return errorMessage;
}


module.exports = {
    parseJsonOrError,
    parseJsonOrValue
};
