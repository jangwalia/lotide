const without = function(arr, arr2) {
  let res = [];
  arr.forEach(element => {
    if(!arr2.includes(element) ){
      res.push(element);
    }
  });return res;
};

module.exports = without;
