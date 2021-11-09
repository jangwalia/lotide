const assertEqual = require('./assertEqual');
const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } const result =  arr[0];
  return result;
};
module.exports = head;