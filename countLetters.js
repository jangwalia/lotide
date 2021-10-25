const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😂 Assertion Passed :${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed :${actual} !== ${expected}`);
  }
};
const countLetters = function(input) {
  const result = {};
  for (let val of input) {
    result[val] = (result[val] || 0) + 1;
  } return result;
};
const word = "countLetters";
const checkLetter = countLetters(word);
assertEqual(checkLetter["c"],1);
assertEqual(checkLetter["e"],2);
assertEqual(checkLetter["z"],1);