//String array duplicates
/*In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck! */

function dup(s) {
    //parameter: array of strings, all lowercase, no spaces. don't know about empty strings or symbols; lowercase implies only letters
    //return: an array containing the strings with consecutive duplicate characters removed
    //example: ['kelles', 'ressel'] -> ['keles', 'resel']
    //pseudo: iterate through each character of each element and if it is NOT equal to the character before it, push it to a new array
    //pseudo2: iterate through the array and filter through each element and return if it is not equal to the character before it
    //pseudo3: loop through the array and then forEach character that does not equal the character before it, push it to a new array
      let newArr = []
      for (let i = 0; i < s.length; i++) {
          console.log(newArr.push(","))
        for (let j = 0; j < s[i].length; j++) {
          if (s[i][j] !== s[i][j-1])
            console.log(newArr.push(s[i][j]))
          
        }
      } return newArr.join("").trim().split(",").slice(1)
    
    };

//Maximum Length Difference

//FIRST TRYYYYYY
function mxdiflg(a1, a2) {
    //param: two arrays of strings with letters from a-z; either can be empty, in which case I must return -1
    //return the maximum difference of the longest element in a1 and the 
    //a1 = ["aa", "bb", "cc"] a2 = ["bb", "dd"] => 5
   if (a1.length < 1 || a2.length < 1) {
      return -1
    } else {
      let shortestA1 = Math.min(...a1.map(el => el.length))
      console.log(shortestA1)
      let longestA2 = Math.max(...a2.map(el => el.length))
      console.log(longestA2)
      
      let shortA1LongA2 = Math.abs(shortestA1 - longestA2)
      
      let longestA1 = Math.max(...a1.map(el => el.length))
      console.log(longestA1)
      let shortestA2 = Math.min(...a2.map(el => el.length))
      console.log(shortestA2)
      
      let longA1ShortA2 = Math.abs(longestA1 - shortestA2)
      
      if (shortA1LongA2 > longA1ShortA2) {
        return shortA1LongA2
      } else {
          return longA1ShortA2
        } 
  }   
}

//Double Char
const doubleChar = str => str.split('').map(el => el + el).join("")



