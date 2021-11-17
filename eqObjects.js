// const eqArrays = require('./eqArray');
// const eqObjects = function(object1, object2) {
//   //check if both obj have same keys and values
//   const key1 = Object.keys(object1);
//   const key2 = Object.keys(object2);
//   //for primitive values
//   if (key1.length !== key2.length) {
//     return false;
//   }
//   //checking Array
//   for (let key of key1) {
//     if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//       return eqArrays(object1[key], object2[key]);
//     } else {
//       if (object1[key] !== object2[key]) {
//         return false;
//       }

//     }
//   } return true;
// };
// module.exports = eqObjects;
