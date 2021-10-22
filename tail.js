const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`😂 Assertion Passed :${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed :${actual} !== ${expected}`);
  }
};
const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  }
  const tailValue = arr.slice(1);
  return tailValue;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");