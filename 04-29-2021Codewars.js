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
