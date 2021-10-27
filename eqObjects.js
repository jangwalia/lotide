
//asert primitive values
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😂 Assertion Passed :${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed :${actual} !== ${expected}`);
  }
};
//assert array function
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


const eqObjects = function(object1, object2) {
  //check if both obj have same keys and values
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  //for primitive values
  if (key1.length !== key2.length) {
    return false;
  }
  //checking Array
  for (let key of key1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }

    }
  } return true;


};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false