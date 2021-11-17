const without = require('../without');
const assert = require('chai').assert;
describe('#without',()=>{
  it("should return array without the item passed as second argument",()=>{
    assert.deepEqual(without([1,2,3],[1]),[2,3]);
  })
  it("should return array without the item passed as second argument",()=>{
    assert.deepEqual(without([1,1,1,"2",3,1,1] ,[1,2,3]),["2"]);
  })
})


