
const TEST_OBJECT = {
    prop_array: [1, 2, 3],
    prop_string: "string",
    prop_number: 1,
};
const VALID_JSON_OBJECT = JSON.stringify(TEST_OBJECT);
const INVALID_JSON_OBJECT = "a{}";

module.exports = {
    TEST_OBJECT,
    VALID_JSON_OBJECT,
    INVALID_JSON_OBJECT
};
