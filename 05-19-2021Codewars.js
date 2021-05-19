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