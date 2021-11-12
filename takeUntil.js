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
module.exports = takeUntil;
