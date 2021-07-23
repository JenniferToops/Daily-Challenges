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

    // also

    function firstNonConsecutive (arr) {
        for (let ind in arr){
          if (arr[ind]-arr[0]!=ind) return arr[ind];
        }
        return null;
      }

    class Solution {
        solve (s) {
            let ans = ''
            ans += s[0]
            let prev = s[0]
        
            for (let i = 0; i < s.length; i++) {
                if (s[i] !== prev) {
                    ans += s[i]
                }
            } prev = c
            return ans
        } 
    }


/*Grasshopper if/else syntax debug */

const checkAlive = health => health <= 0 ? false : true

// function checkAlive(health) {
//   if (health <= 0) {
//     return false
//   } else {
//     return true
//   }
// }

/* Training JS #10: loop statement --for 

Task
Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.*/

function pickIt(arr){
    var odd=[],even=[];
    //coding here
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i])
      } else {
        odd.push(arr[i])
      }
    }
    return [odd,even];
  }

/* Training JS #29: methods of arrayObject---concat() and join() */
  function bigToSmall(arr){
    let flattenedArr = [].concat(...arr)
    let flattenedSortedArr = flattenedArr.sort((a, b) => b - a)
    let stringArr = flattenedSortedArr.join(">")
    return stringArr
  }
  const bigToSmall = arr => [].concat(...arr).sort((a, b) => b - a).join(">")


