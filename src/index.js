const parseJsonOr = require('./parseJsonOr');

/**
 * Returns the parsed json string or the given object.
 * @param {string} jsonString The given json string to parse.
 * @param {any} optionalValue The value that will be returned in case the parsing will fail.
 * @returns {any} The parsed json string or the given object.
 */
exports.orError = parseJsonOr.parseJsonOrError;

/**
 *
 * @param {string} parsingError
 * @param {string} jsonString
 * @param {function|string|null} [errorBuilder=null] Either a function with the signature of [(parsingError, originalJSONString): string]
 * or a string that will be used as the error value.
 * @returns {string}
 */
exports.orValue = parseJsonOr.parseJsonOrValue;
