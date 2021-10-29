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
//creating our own map function
const map = function(arr,cb){
  let newArr = [];
  for(let val of arr){
    newArr.push(cb(val));
  }return newArr;
}
let numbers = [1,2,3,4];
const testMap1 = map(numbers, num => num * 2);
assertArraysEqual(testMap1,[2,4,6,8]);