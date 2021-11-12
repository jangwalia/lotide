//creating our own map function
const map = function(arr,cb){
  let newArr = [];
  for(let val of arr){
    newArr.push(cb(val));
  }return newArr;
}
module.exports = map;
