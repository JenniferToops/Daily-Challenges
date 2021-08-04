/* Find the middle element 
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.*/

var gimme = function (inputArray) {
    let newArr = [... inputArray]
    newArr.sort((a, b) => a - b)
    let middleVal = newArr[1]
    return inputArray.indexOf(middleVal)
  };

  /* summing a number's digits 
  Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5
Let's assume that all numbers in the input will be integer values.*/

function sumDigits(number) {
    const regex = /[0-9]/g
    let arr = number.toString().match(regex)
    let arrNums = arr.map(el => Number(el))
    return arrNums.reduce((acc, c) => acc + c, 0)
  }
  


/* Alternate capitalization

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!



*/ 
  function capitalize(s){
    let oddUpperCaseString = ""
    let evenUpperCaseString = ""
    for (let i = 0; i < s.length; i++) {
      if (i % 2 !== 0) {
          oddUpperCaseString += s[i].toUpperCase()
      } else {
          oddUpperCaseString += s[i]
      }
    } for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
          evenUpperCaseString += s[i].toUpperCase()
        } else {
          evenUpperCaseString += s[i]
        }
      }
      return [evenUpperCaseString, oddUpperCaseString]
  };

  /* Alternate capitalization Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!*/

function capitalize(s){
    let upperCaseEven = s.split("").map((el, i) => i % 2 === 0 ? el.toUpperCase() : el)
    let upperCaseOdd = s.split("").map((el, i) => i % 2 !== 0 ? el.toUpperCase() : el)
    return [upperCaseEven.join(""),upperCaseOdd.join("")]
    
  };