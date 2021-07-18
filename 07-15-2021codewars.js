/* String transformer
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces. */

function stringTransformer(str) {
    // Your code here
    // parameter = string with some characters and spaces, just letters, no numbers, may not be words
    // return string where 1 every character has been changed from uppercase to lowercase and viceversa & 2. the order of the characters has been reversed
    // no weird characters, yes spaces
    // pseudocode: turn the string into and array so that I can go through each element and change the case, then reverse the order, turn it back into a string, and return it
    // pseudo-pseudo: split array, map() through it and if upper=> lower, if lower => upper, return the opposite, then reverse(), then return  
    let strArr = str.split("")
    let newStrArr = strArr.map((el, i) => {
                                    if (el === el.toUpperCase()) {
                                      return el.toLowerCase()
                                  } else if (el === el.toLowerCase()) {
                                      return el.toUpperCase()
                                  }
  })
    return newStrArr.join("").split(" ").reverse().join(" ")
  }

  function transform(str) {
    let newStr = str
    .split(' ')
    .reverse()
    .join(' ')
    .split('')
    for(let i = 0; i < newStr.length; i++) {
      newStr[i] === newStr[i].toUpperCase() ? newStr[i] = newStr[i].toLowerCase() : newStr[i] = newStr[i].toUpperCase() 
    }
    return newStr.join('')
  }



  //Two technical questions
/*
take two strings, including letters from a-z
new sorted string, longest possible,
destinct letters, only once

s1, s2
two paramters in string format
return a single string
no duplicates 
a-z letters 
unique

*/
//Params  s1, s2
//Exmples cycle through s1, and s2 paramaters
//Return return a-z string, unique, all letters
//Psuedo Code, Methods to use, Loop, 


function sortAlphabet(x,y){
  const regex = /[a-z]/gi
  let oneString = [...x.concat(y)].filter(el => el.match(regex))
  return [...new Set(oneString)].sort().join('')
  }
console.log(sortAlphabet('xy#-aa2b','x=yb3c'))


const longestPossible = ((str1, str2) => [...newSet(str1 + str2)].sort().join(''))

Object.keys(Array.from(str1 + str2).reduce((m, c) => { m[c] = true; return m }, {})).sort().join()

// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

//param--string with first and last names. first name first separated by a colon and the names are separated by semicolons. no spaces between any characters 
//return--string in uppercase that contains last name first then first name separated by commas with a space after each comma. the full names are encapsulted by parentheses.alphabetical in ascending order by last name then first. 
//example--"William:Blake;Anne:Sexton;Sylvia:Plath" return "(BLAKE, WILLIAM)(PLATH, SYLVIA)(SEXTON, ANNE)"
//PSEUDO--PUT EVERYTHING IN UPPERCASE, SEPARATE THE FULL NAMES AND SIMULTANEOUSLY REPLACE THE COLON WITH A COMMA, ITERATE OVER EACH OF THE ELEMENTS AND SWITCH THE ORDER OF THE FIRST AND LAST NAME, 

console.log("William:Blake;Hayden:Blake;Anne:Sexton;Sylvia:Plath".toUpperCase().split(";").map(el => el.split(':').reverse()).sort().reduce((a,names) => (
  a += `(${names[0]}, ${names[1]})`
), ""))

function switcharoni(str) {
  return str.toUpperCase().split(";").map(el => el.split(':').reverse()).sort().reduce((a,names) => (
    a += `(${names[0]}, ${names[1]})`
  ), "")
}

//or

let str = "William:Blake;Hayden:Blake;Anne:Sexton;Sylvia:Plath"
function meet(str) {
  let newStr = str.toUpperCase().split(';')
  .map( n => n.split(':').reverse().join(', '))
  .sort()
  .join(')(')
  return `(${newStr})`
}
meet(str)

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// inside Question-03 if you need it


function breakUp(s){
  return s.split('')
  .map( ch => ch === ch.toUpperCase() ? ' ' + ch : ch)
  .join('')
  //split into ind letter
  //check for uppercase
  // add space proior to the uppercase letter
}

console.log(breakUp("camelCasing"), "camel Casing")
console.log(breakUp("identifier"), "identifier")
console.log(breakUp(""), "")

//or

function breakCasing(str) {
  return str.split("").map(x => x === x.toUppercase() ? `" " ${x}` : x).join('')
}

console.log(breakCasing("camelCasing"), "camel Casing")
console.log(breakCasing("identify"), "identify")
console.log(breakCasing(""), "")


