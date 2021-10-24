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
const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }
  let finalArray = [];
  const middle = Math.floor((arr.length) / 2);
  if (arr.length % 2 !== 0) {
    finalArray.push(arr[middle]);
  } else {
    finalArray.push(arr[middle - 1], arr[middle]);
  }
  return finalArray;
};
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([2, 3, 4, 7, 1, 6, 8]), [7]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 4]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);

