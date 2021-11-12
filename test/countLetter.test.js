const assert = require('chai').assert;
const countLetters  = require('../countLetters');
describe('#countLetters',()=>{
  it('should return 2 for [e] in "countLetters"',()=>{
    const word = "countletters";
    const checkLetter = countLetters(word);
    assert.strictEqual(checkLetter["e"],2);
  });
  it('should return 1 for l in "countLetters"',()=>{
    const word = "countletters";
    const checkLetter = countLetters(word);
    assert.strictEqual(checkLetter["l"],1);
  });
});








