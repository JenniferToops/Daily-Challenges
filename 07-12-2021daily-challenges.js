/* Sum of array singles: 
Given an array of numbers in which two numbers occur once and the rest occur only twice, return the sum of numbers that occur only once, e.g.--[4, 5, 7, 5, 4, 8], returns 15 because 7 and 8 only occur once and their sum is 15. */

function repeats(arr){
    return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
  };