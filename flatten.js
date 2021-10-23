const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
}
const assertArraysEqual = function (ar1, ar2) {
  if (eqArrays(ar1, ar2)) {
    console.log(`😄 Assertion Passed :${ar1} === ${ar2}`);
  }
  else {
    console.log(`💀 Assertion Failed :${ar1} !== ${ar2}`);
  }
}

const flatten = function (arr) {
  let finalArr = [];
  for (let j = 0; j < arr.length; j++) {
    if (Array.isArray(arr[j])) {
      for (let k = 0; k < arr[j].length; k++) {
        finalArr.push(arr[j][k]);
      }
    }
    else {
      finalArr.push(arr[j]);
    }
  } return finalArr;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));

