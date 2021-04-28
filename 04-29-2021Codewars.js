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
