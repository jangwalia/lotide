const findKey = require('../findKey');
const assert = require('chai').assert;

describe('#findKey',()=>{
  it("should return the object key whose value is truthy for callback",()=>{
    const result1 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2);
    assert.strictEqual(result1,"noma");
  })
});

