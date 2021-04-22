/* Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '``` */

var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`
  }

  //Stringy Strings
  /*write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
the string should start with a 1.
a string with size 6 should return :'101010'.
with size 4 should return : '1010'.
with size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers.*/

function stringy(size) {
    let one = "1"
    let repeatedString = (one.repeat(size)).split("")
    console.log(repeatedString);
      for (let i = 0; i < repeatedString.length; i++) {
        if (i % 2 !== 0) {
          repeatedString[i] = 0
        }
      } return repeatedString.join("")   
  }


  //Well of Ideas - Easy Version

  function well(x){
    // param = arr with good/bad strings
    // if <= 2 good ideas, return publish
    // if > 2 good ideas, return i smell a series
    // if all bad ideas, return fail
          let good = []
          let poor = []
    for (let i = 0; i < x.length; i++) {
          if (x[i] === "good") {
            good.push(x[i])
          } else {
            poor.push(x[i])
            }
      } if (good.length > 0 && good.length < 3) {
          return "Publish!"
        } else if (good.length >= 3) {
          return "I smell a series!"
        } else {
          return "Fail!"
        }
    }