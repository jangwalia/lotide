const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  }
  const tailValue = arr.slice(1);
  return tailValue;
};
module.exports = tail;