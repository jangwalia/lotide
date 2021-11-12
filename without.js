const without = function(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== item[i]) {
      newArr.push(arr[i]);
    }
  } return newArr;
};
module.exports = without;
