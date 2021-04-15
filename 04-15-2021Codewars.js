//Regex validate PIN code
//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
    pinArr = Array.from(pin)
    let checkFalse = []
    //check for pin length === 4 || 6
  if ((pinArr.length === 4 || pinArr.length === 6)) {
      for (let i = 0; i < pinArr.length; i++) {
        //check for pin value === number if pin === 4 || 6 per above
        if ((/[0-9]/).test(pin[i]) !== true) {  
          //push to checkArr if it's not a number
          checkFalse.push(pin[i])
        } if (checkFalse.length > 0 ) {
              return false 
      }
      } return true
    } 
    return false
}

// beta: transform an array into a string

function transform(array) {
    let strArray = array.map(e => String(e))
    let str = strArray.join("")
    return str
}