
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
module.exports = countOnly;

