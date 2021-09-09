//Count the divisors of a number

function getDivisorsCnt(n){
    let counter = 0
    if (n === 1) {
      return 1
    } else {
      for (let i = n / 2; i >= 1; i--) {
        if (n % i === 0) {
          counter += 1
        } 
      }  
    }
    return counter + 1
  }

  //other people's nice code:

  function getDivisorsCnt(n) {
    var div = 0;
    for(var i = 1; i <= n; i++) if(n % i == 0) div++;
    return div;
  }

// The highest profit wins!
// find mininum and maximum values from array
/*Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar. */

const minMax = arr => [Math.min(...arr), Math.max(...arr)]

function minMax(arr) {
    arr.sort((a,b) => a - b)
    return [arr[0], arr[arr.length-1]]
 }


 /* Largest 5 digit number in a series */
 function solution(digits){
    let largestNumber = Number(digits.slice(digits.length-5, digits.length))
  
    if (typeof digits !== 'string') {
      return 'solution did not return correct value'
    } else {
        for (let i = digits.length-1; i >= 5; i--) {
          largestNumber === 0 ? largestNumber = Number(digits.slice(i-5, i)) : largestNumber < Number(digits.slice(i-5, i)) ? largestNumber = Number(digits.slice(i-5, i)) : Number(digits.slice(i-5, i))
      } 
    } 
    return largestNumber
  }