# Parse-Json-Or
Safely parse JSON strings while explicitly indicating the behaviour in case of a parsing error


## Getting Started

Just install the package (``` npm i parse-json-or --save ```)


### Prerequisites

No Prerequisites

### Installing

* Just install the package

```
 npm i parse-json-or --save
```

## Use it in your code

### Variables used in our examples :
```javascript
// Require the package
let parseJson = require('parse-json-or');
  
// We will use these values for our examples
let demoObject = { foo: 1, bar: 2 };
let validJsonString = JSON.stringify(demoObject);
let invalidJsonString = "a{}" ;
```

### orValue(jsonString: string, orValue: *)
#### Parse JSON safely or get the 'orValue' in case of failure :
```javascript
// Parse JSON safely or return the 'orValue'
let value;
  
value = parseJson.orValue(validJsonString, demoObject); // value = { foo: 1, bar: 2 }  
  
value = parseJson.orValue(invalidJsonString, "You can use any value from any type"); // value = "You can use any value from any type"
  
value = parseJson.orValue(invalidJsonString, 15); // value = 15
  
value = parseJson.orValue(invalidJsonString, true); // value = true
  
value = parseJson.orValue(invalidJsonString, { evenObjects: true }); // value = { evenObjects: true }
```

### orError(jsonString: string, errorBuilder: string)
#### Parse JSON safely or raise an error created with a message that is created from the given string in case of failure :
```javascript
// Parse JSON safely or raise an error (created from a string) in case of failure
let errorBuilderString = "This is a string message";
let value;
  
value = parseJson.orError(validJsonString, errorBuilderString); // value = { foo: 1, bar: 2}
  
try {
    value = parseJson.orError(invalidJsonString, errorBuilderString); // error = "You can use value from any type";
} catch (err) {
    console.log(err.message); // "This is a string message"
}

```

### orError(jsonString: string, errorBuilder: function)
#### Parse JSON safely or throw an error with a 'message' property that is the returned value from the passed function 
```javascript
// Parse JSON safely or raise an error (created from a string) in case of failure
let errorBuilderFunction = (parsingError, originalString) => `${parsingError}:${originalString}`;
  
let value;
value = parseJson.orError(validJsonString, errorBuilderFunction); // value = { foo: 1, bar: 2}
  
try {
    value = parseJson.orError(invalidJsonString, errorBuilderFunction); 
} catch (err) {
    console.log(err.message); // "SyntaxError: Unexpected token a in JSON at position 0:a{}"; 
}

```

### orError(jsonString: string)
```javascript
// In case that the no 'errorBuilder' is given, the default error message will be used.
let value;
value = parseJson.orError(validJsonString); // value = { foo: 1, bar: 2}
  
try {
    value = parseJson.orError(invalidJsonString, errorBuilderFunction); // error = z
} catch (err) {
    console.log(err.message); // "SyntaxError: Unexpected token a in JSON at position 0"
}

``` 


## Running the tests

```
npm run test
```

## Built With

* [lodash](https://lodash.com/docs/) - A modern JavaScript utility library delivering modularity, performance and extras.

## Contributing

We are open to your contribution.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Or Lavy** - *Initial work* - [OrLavy](https://github.com/OrLavy)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

