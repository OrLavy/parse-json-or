import chai from 'chai';

chai.expect();

const expect = chai.expect;

const testingConstants = require('./testingConstants');

const paresJson = require('../lib/parse-json-or');

describe('Json or Error', () => {
    before(() => {

    });

    it('should parse the json successfully', () => {
        const parsedObject = paresJson.orError(testingConstants.VALID_JSON_OBJECT);
        expect(parsedObject).to.deep.equal(testingConstants.TEST_OBJECT);
    });

    it('should raise an error from a string builder', () => {
        const errorBuilder = "This is an error message";

        expect(() => paresJson.orError(testingConstants.INVALID_JSON_OBJECT, errorBuilder)).to.throw(errorBuilder);
    });

    it('should raise an error from a hard-coded function builder', () => {
        const errorMessage = "This is an error message";
        const errorBuilder = () => errorMessage;

        expect(() => paresJson.orError(testingConstants.INVALID_JSON_OBJECT, errorBuilder)).to.throw(errorMessage);
    });

    it('should raise an error from a hard-coded function builder', () => {
        const expectedParsingError = "SyntaxError: Unexpected token a in JSON at position 0";
        const originalString = testingConstants.INVALID_JSON_OBJECT;
        const errorBuilder = (parsingError, originalString) => `${parsingError}:${originalString}`;

        expect(() => paresJson.orError(originalString, errorBuilder)).to.throw(errorBuilder(expectedParsingError, originalString));
    });
});

describe('Json or value', () => {
    before(() => {

    });

    it('should parse the json successfully', () => {
        const parsedObject = paresJson.orValue(testingConstants.VALID_JSON_OBJECT);
        expect(parsedObject).to.deep.equal(testingConstants.TEST_OBJECT);
    });

    it('should return the "or value" after parsing failure', () => {
        const orValue = { name: 'This is an or value'};
        const parsedObject = paresJson.orValue(testingConstants.INVALID_JSON_OBJECT, orValue);
        expect(parsedObject).to.deep.equal(orValue);
    });
});
