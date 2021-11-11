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
module.exports = middle;

