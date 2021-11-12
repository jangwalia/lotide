//create a function called findKeyByValue
//the function takes an object and value
//and return the key
const findKeyByValue = function(obj, val) {
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
};
module.exports = findKeyByValue;
