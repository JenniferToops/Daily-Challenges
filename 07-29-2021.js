/*Two Oldest Ages
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example:

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10] */
const twoOldestAges = ages => ages.sort((a, b) => a - b).splice(-2, 2)

/* Find the Capitals
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); */

var capitals = function (word) {
  // param: string with upper/lowercase
  // return: array with indices of uppercase characters
  // example: see example
  // pseudo: create an empty array, convert the string into an array, loop through each letter in the string and if it is uppercase, push the index of that letter to the empty array
  let indexOfUpperCaseArr = []
  let wordArr = word.split("")
  wordArr.forEach(letter => letter === letter.toUpperCase() ? indexOfUpperCaseArr.push(wordArr.indexOf(letter)) : letter)
  return indexOfUpperCaseArr                
};