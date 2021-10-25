const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😂 Assertion Passed :${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed :${actual} !== ${expected}`);
  }
};
//create a function which takes array and object
//and return the count of the array items given in
//object
const countOnly = function(allItems, itemsToCount) {
  //this function should return an object
  let result = {};
  //loop over the array and get key values for obhect
  for (let val of allItems) {
    result[val] = (result[val] || 0) + 1;
  }
  for (let key in itemsToCount) {
    if (allItems[key] === -1) {
      result[key] = undefined;
    }
    if (!itemsToCount[key]) {
      result[key] = undefined;
    }
  } return result;

};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
