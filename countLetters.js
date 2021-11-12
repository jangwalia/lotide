const countLetters = function(input) {
  const result = {};
  for (let val of input) {
    result[val] = (result[val] || 0) + 1;
  } return result;
};
module.exports = countLetters;
