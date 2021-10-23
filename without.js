 const eqArrays = function(arr1,arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0;i < arr1.length;i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }return true;
}
const assertArraysEqual = function(ar1,ar2){
  if(eqArrays(ar1,ar2)){
    console.log(`😄 Assertion Passed :${ar1} === ${ar2}`);
  }
  else{
    console.log(`💀 Assertion Failed :${ar1} !== ${ar2}`);
  }
} 

const without = function(arr,item){
  let newArr = [];
  for(let i = 0;i < arr.length;i++) {
    if(arr[i] !== item[i]){
      newArr.push(arr[i]);
    }
  }return newArr;
}
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);