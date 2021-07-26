/* Remove consecutive duplicate words
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
--> "alpha beta gamma delta alpha beta gamma delta" */

function removeConsecutiveDuplicates(s) {
    let sArr = s.split(" ")
    let sString = sArr.filter((el, i, arr) => el !== sArr[i+1])
    return sString.join(" ")
  }



//   create a function that returns the capitalization of a name. No Arrays, No REGEX!

// PARAM:
// RETURN:
// EXAMPLE:
// PSEUDO:

function nameO(str) {
    return str.charAt(0).toUpperCase() + str.slice(1, str.length)
}

//or
const nameO = str => str.charAt(0).toUpperCase() + str.slice(1, str.length)

//or 
const nameO = str => str[0].toUpperCase + str.slice(1)


/* 
Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
The result of the function should be the truncated (if needed) string.
For instance:
truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
truncate("Hi everyone!", 20) = "Hi everyone!"
*/
//input = str against maxlength, if string > maxlength, then replace the end with ...
//total length of the string that is being returned == maxLength
//param = string, maximum length of string plus ellipses, something always within the string
//return = string equal to or less than maximum length, with original case.
//ex: above
//pseudo: input, first parameter of string.length compare to max length --return original string if <=
//pseudo: if the input is greater than maxLength. take the string and just grab the initinal all up to maxLenght 20) + "..."

function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str
    } else {
        return str.slice(0, maxLength-3) + "..."
    }
}


/*Write a function checkForImposterSyndrome(str) that returns true if str contains 'not ready' or 'can\'t interview yet', otherwise false--use includes() */

function checkForImposterSyndrome(str) {
    return str.toLowerCase().includes('not ready') || str.toLowerCase().includes('can\'t interview yet') ? true: false
}

//or

const checkForImposterSyndrome = str => str.toLowerCase().includes('not ready') || str.toLowerCase().includes('can\'t interview yet') ? true: false

//create a camelcase method where all words must have their first letter capitalized without spaces
//'hello case' => "HelloCase"
//'camel case word' => "CamelCaseWord"

//param-string--never empty
//return a string with no spaces between words, and the first letter of each original word is uppercased
//example: "hI there CoTTon cAndy"
//pseudo: make sure that each word is undercased, then go through the first letter of each word and capitalize it, then remove all the spaces between the words and return or console.log the return string

function camelCaseStr(str) {
    if (str !== typeof 'string' || str.length < 1) {
        return `${str} is not a valid string`
    } else {
    let lowerStr = str.toLowerCase()
    let lowerArr = lowerStr.split(" ").map((el, i) => el[0].toUpperCase() + el.slice(1))
    return lowerArr.join("")
    }   
}
//or