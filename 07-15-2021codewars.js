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