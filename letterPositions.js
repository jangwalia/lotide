const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};
const assertArraysEqual = function(ar1, ar2) {
  if (eqArrays(ar1, ar2)) {
    console.log(`😄 Assertion Passed :${ar1} === ${ar2}`);
  } else {
    console.log(`💀 Assertion Failed :${ar1} !== ${ar2}`);
  }
};


const letterPosition = function(sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!result[sentence[i]]) {
        result[sentence[i]] = [i];
      } else {
        result[sentence[i]].push(i);
      }
    }
  } return result;
};
assertArraysEqual(letterPosition("hello").e,[1]);