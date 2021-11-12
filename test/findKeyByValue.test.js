const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe('#findByValue',()=>{
  it('should return the key from given object and value',()=>{
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,"The Wire"),"drama");
  })
  it('should return undefined if there is not value in the object',()=>{
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,"The Homeland"),undefined);
  })
});






