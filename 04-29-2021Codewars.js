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