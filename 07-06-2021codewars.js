/* No oddities here
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given. */

// function noOdds( values ){
//   // Return all non-odd values
//   // pseudo return values/elements where mod 2 === 0 in array
//   let even = values.filter(el => el % 2 === 0)
//   return even
// }

const noOdds = values => values.filter(el => el % 2 === 0)