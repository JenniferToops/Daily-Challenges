//Capitalization and Mutability

/* Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty. */

// function capitalizeWord(word) {
//   let arr = word.split('')
//   let firstLetter = arr[0].toUpperCase()
//   let letters = arr.slice(1, arr.length)
//   return `${firstLetter}${letters.join("")}` 
// }

// function capitalizeWord(word) {
//   let firstLetter = word.substring(0, 1).toUpperCase()
//   let restOfWord = word.substring(1, word.length)
//   return firstLetter + restOfWord
// }

const capitalizeWord = word => word.substring(0, 1).toUpperCase() + word.substring(1, word.length)

//NoLoops2 - you only need one
/* *** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case. */

// function check(a,x){
//     return a.includes(x)
//   };

const check = (a, x) => a.includes(x)

//ES6 string addition
/* It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string. */

function joinStrings(string1, string2){
    return `${string1} ${string2}`
 }

 //Simple Comparison?

 /* Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number(). */

const add = (a, b) => a == b ? true : false

//Remove the time

/* You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

Weekday Month Day, time e.g., Friday May 2, 7pm

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2". */

function shortenToDate(longDate) {
    let commaIndex = longDate.indexOf(",")
    let short = longDate.slice(0, commaIndex) 
    return short
  }

//Are arrow functions odd?

/* Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  [] */


function odds(values){
  return values.filter(el => el % 2 );
}

//What is between?

function between(a, b) {
  //given two integers as parameters, need to return an array with 
  //all consecutive integers between the parameters and including the parameters
  let array = []
  for (let i = a; i <= b; i++) {
    array.push(i)
  } return array
}

//Cat years, dog years

var humanYearsCatYearsDogYears = function(humanYears) {
  // parameter = human years integer >=1
  // return = cat years & dog years pushed into an array with the human years (age)
      let firstYear = 15
      let secondYear = firstYear + 9
      let moreCatYears = secondYear + (4 * (humanYears - 2))
      let moreDogYears = secondYear + (5 * (humanYears - 2))
      
  if (humanYears === 1) {
      catYears = firstYear
      dogYears = firstYear
  } else if (humanYears === 2) {
      catYears = secondYear
      dogYears = secondYear
  } else if (humanYears > 2) {
      catYears = moreCatYears
      dogYears = moreDogYears
  }
    let ages = [humanYears, catYears, dogYears]
    return ages 
}

//Holiday VIII-Duty Free
function dutyFree(normPrice, discount, hol){
  let savings = normPrice * discount/100
  let bottles = Math.floor(hol / savings)
  return bottles
}

//Contamination #1-String-
// function contamination(text, char){
//   let textLength = text.length
//   console.log(textLength)
//   console.log(char)
//   if (textLength < 1 || char.length < 1) {
//     return ""
//   } else if (textLength > 0 && char.length > 0) {
//     return char.repeat(textLength)
//   }
// }

const contamination = (text, char) => text.length < 1 || char.Length < 1 ? "" : char.repeat(text.length)

//validate code with simple regex

// function validateCode (code) {
//   let strCode = String(code)
//   let typeCode = typeof strCode
//   const regex = /[1-3]/
//   if (/[1-3]/.test(strCode[0])) {
//   return true
//   } else {
//     return false
//   }
// }

const validateCode = code => /[1-3]/.test(String(code)[0]) 

//String Templates = bug fixing #5
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

//Moving Zeros to the end

var moveZeros = function (arr) {
  let newArr = []
  let zeroArr = []
 for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i])
    } else {
      zeroArr.push(arr[i])
    }
  } return newArr.concat(zeroArr)
}

//Basic Math (Add or Subtract)
function calculate(str) {
  const regex = /plus/g
  const regex2 = /minus/g
  let newStr = str.replace(regex, "+")
  let newerStr = newStr.replace(regex2, "-")
  let evalString = eval(newerStr)
  return String(evalString)
}

//A wolf in sheep's clothing

function warnTheSheep(queue) {
  let reverseQueue = queue.reverse()
  let closestAnimal = queue[0]
  if (closestAnimal == "wolf") {
  return "Pls go away and stop eating my sheep"
  } else {
    let wolfIndex = queue.indexOf("wolf")
    let sheepInDanger = wolfIndex
    return `Oi! Sheep number ${sheepInDanger}! You are about to be eaten by a wolf!`
  }
}