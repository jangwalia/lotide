
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

const takeUntil = function(arr,cb){
  //create empty array
  let result = [];
  //work on array 
  for(let i = 0;i < arr.length;i++){
//cb will take those elements which hold untrue to the condition
    if(cb(arr[i])){
      result = arr.slice(0,arr.indexOf(arr[i]));
    }

  }return result;
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[1,2,5,7,2]);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,['I\'ve', 'been', 'to', 'Hollywood']);