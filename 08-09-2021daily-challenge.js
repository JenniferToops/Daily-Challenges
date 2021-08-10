/* altered fizzbuzz 
Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”. */

function fizzBuzz(num) {
    let fizzBuzzArr = []
    for(let i = 1; i <= num; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            fizzBuzzArr.push('FizzBuzz')
        } else if (i % 2 === 0) {
            fizzBuzzArr.push('Fizz')
        } else if (i % 3 === 0) {
            fizzBuzzArr.push('Buzz')
        } else {
            fizzBuzzArr.push(i)
    } 
}    return fizzBuzzArr
}


/* Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! */ 

str = "It's Hot Outside"

function reverseChars(str) {
    let reversedStrArr = []
    let strArr = str.split("")
    for (let i = str.length; i >= 0; i--) {
        reversedStrArr.push(strArr[i])
    }
    return reversedStrArr.join("")
}

//easy way: 
function reverseIt(str) {
    return str.split("").reverse().join("")
}


reverseChars(str)
"edistuO toH s'tI"

/* 
Even numbers in an array
Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/

function evenNumbers(array, number) {
    let evenArr = array.filter(el => el % 2 === 0)
    return evenArr.slice(evenArr.length-number)
  }