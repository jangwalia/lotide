# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jangw/lotide`

**Require it:**

`const _ = require('@jangw/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function head(arr)`:returns first element of an array
* `function middle(arr)`: returns middle element of an array, in case of array with even number of elements returns middle two elements
* `function tail(arr)`: returns all the elements from an array except head i.e first element
* `function countLetters(str)`: returns the number of occurrence of character in a string
* `function countOnly(arr,obj)`: returns the number of occurrence of character of object in an array
* `function findKey(obj,callback)`: returns the key where callback is true for object value
* `function findKeyByValue(obj,value)`: returns the key of for the value of the given object
* `function flatten(arr)`: returns one array from the nested array
* `function letterPosition(str)`: returns index value of given string
* `function map(arr,callback)`: returns new arr by applying callback on each element of the array
* `function takeUntil(arr,callback)`: returns the array with values before the callback return true for the array
* `function without(arr,val)`: returns the array excluding the val from the array
