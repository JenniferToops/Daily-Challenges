/*FIXME: replace all dots
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null. */


const replaceDots = str => str.replace(/\./g, "-")


/*Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence*/
const replace = s => s.replace(/[aeiou]/gi, "!")

/*Short Long Short */
const solution = (a, b) => a.length < b.length ? a + b + a : b + a + b
  
/* Is the string uppercase? */
String.prototype.isUpperCase = function() {
    return this.toString() ===  this.toUpperCase()
  }

/* 
Find the first non-consecutive number
*/

  function firstNonConsecutive (arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i-1] + 1) {
        return arr[i]
      }
      } return null
    }  