const letterPosition = require('../letterPositions');
const assert = require('chai').assert;
describe('#letterPosition',()=>{
  it("should return index value of given letter in the word",()=>{
    const word = "hello";
    assert.deepEqual(letterPosition(word).e,[1]);
  })
})





