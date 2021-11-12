const flatten = require('../flatten');
const assert = require('chai').assert;
 describe('#flatten',()=>{
   it('should remove nested arrays and return one array',()=>{
     const arr = [1, 2, [3, 4], 5, [6]];
     assert.deepEqual(flatten(arr),[1,2,3,4,5,6]);
   })
 })








