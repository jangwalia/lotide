const flatten = function(arr) {
  let finalArr = [];
  for (let j = 0; j < arr.length; j++) {
    if (Array.isArray(arr[j])) {
      for (let k = 0; k < arr[j].length; k++) {
        finalArr.push(arr[j][k]);
      }
    } else {
      finalArr.push(arr[j]);
    }
  } return finalArr;
};

module.exports = flatten;


