const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const findKeys = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  findKeys : findKeys,
  findKeyByValue : findKeyByValue,
  countOnly : countOnly,
  countLetters : countLetters,
  flatten : flatten,
  letterPositions : letterPositions,
  map : map,
  takeUntil : takeUntil,
  without : without
};