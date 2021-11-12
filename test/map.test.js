const map = require('../map');
const assert = require('chai').assert;
describe('#map',()=>{
  it("should take array and return new array by applying callback on each element",()=>{
    let numbers = [1,2,3,4];
    const testMap1 = map(numbers, num => num * 2);
    assert.deepEqual(testMap1,[2,4,6,8]);
  })
})


