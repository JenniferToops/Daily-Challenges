/* Sort the odd 
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */

function sortArray(array) {
    // param: a 1-D array of numbers; array never empty
    // return: a 1-D array from the original array with odd values sorted in ascending order and even values in their original positions
    // example: [6, 5, 3] -> [6, 3, 5]
    // pseudo: push even and odd elements into their own arrays, sort odds into ascending order, then replace the existing odd indexed values with the sorted ones 
  
    let odds = array.filter(el => el % 2 !== 0)
    let sortedOdds = odds.sort((a, b) => a - b)
    let newArr = array.map(el => el % 2 !== 0 ? el = sortedOdds.shift(): el)
    return newArr
    }

/* Spraying trees
Let cost of all liquid be x

Your function should return string like this : 'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'

For example:

task('Monday', 15, 2) -> 'It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid'
*/

function task(w, n, c) {
    const weekdays = {
      Monday: "James", 
      Tuesday: "John", 
      Wednesday: "Robert", 
      Thursday: "Michael", 
      Friday: "William"
    }
    let cost = n * c
    if (w === "Monday") {
      return `It is ${w} today, ${weekdays.Monday}, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid` 
      }
    if (w === "Tuesday") {
      return `It is ${w} today, ${weekdays.Tuesday}, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid` 
    }
    if (w === "Wednesday") {
      return `It is ${w} today, ${weekdays.Wednesday}, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid` 
    }
    if (w === "Thursday") {
      return `It is ${w} today, ${weekdays.Thursday}, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid` 
    }
    if (w === "Friday") {
      return `It is ${w} today, ${weekdays.Friday}, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid` 
    }
  }