const assertEqual = require('../assertEqual');
const head = require('../head');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([4,6,7]), 5);
assertEqual(head(["hi", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2]), 2);
assertEqual(head([]), 2);
