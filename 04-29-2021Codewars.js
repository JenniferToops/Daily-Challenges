//repeatIt

var repeatIt = function(str, n) {
    let stringTest = typeof str  
    if (stringTest !== "string") {
        return "Not a string"
    }  else {
      const repeatedString = str.repeat(n)
      return repeatedString
    }
  }

//NameShuffler
/* Write a function that returns a string in which firstname is swapped with last name.
nameShuffler('john McClane'); => "McClane john"*/
function nameShuffler(str){
    return str.split(" ").reverse().join(" ")
  }

//Regexp Basics - is it a digit?
/* Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise. */
String.prototype.digit = function() {  
    //   let trimmedString = this.trim()
      const regex = /[0-9]/
      const strTrue = typeof String
      if (this.length > 2) {
        return false
      } else if (this.length < 2 && regex.test(this) === true){
        console.log(String)
        return true
      } else {
      return false
      }
    }

//my dates got mixed up... this is today's codewar (4/29/21)
//Jaden casing strings
/* Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"*/

function toJadenCase(str) {
  let lowerCaseString = str.toLowerCase()
  let lowerCaseArr = lowerCaseString.split(" ")
//   console.log(lowerCaseArr)
  let addUpperCase = lowerCaseArr.map(el => el[0].toUpperCase()+ el.substring(1))
  let jadenCase = addUpperCase.join(" ")
  return jadenCase
  }



  function loop(n) {
    for (var i=0;i<n;i++) {
      console.log(array[i%array.length])
    }
  }