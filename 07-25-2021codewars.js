//Exclamation marks series #1: Remove a exclamation mark from the end of string

function remove(s){
    // param = string with or without exclamation mark at the end. definitely a string, do not need to verify
    // return = string that is less one exclamation mark at the end
    // example = given s = "!Hi! Hi!!" and return is "!Hi! Hi!"
    // pseudo 1 = go through the string and remove the last exclamation mark 
    // pseudo 2 = create a regex that targets the last exclamation mark of the input. 
      //replace the regex with nothing
      const regex = /!$/
      return s.replace(regex, "") 
    }

    function hexToDec(hexString){
        /*To convert a hexadecimal to a decimal manually, 
        you must start by multiplying the hex number by 16. 
        Then, you raise it to a power of 0 and increase that power by 1 
        each time according to the hexadecimal number equivalent */
        return parseInt(hexString, 16)
      }

/*Logical calculator
      Your Task:
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False). */
      function logicalCalc(array, op){
        // param 1: array which will always have at least 1 element and no more than 50 elements
        // param 2: string containing the logical operator of "AND", "OR", "XOR"
        // return: Boolean (true or false)
        // example: [true, false, false, false], "XOR" -> true
        //example: [true, true, false, false], "XOR" -> false
        // "OR" is always going to be true unless all of the elements are false
        // "AND" is always going to be false unless all of the elements are true
        // "XOR" needs to have an even number of trues/falses to be false, 
        //      --needs to have an odd number of either/each to be true
        // with singletons, return the element's value
          console.log(array, op)
          if (array.length === 1) {
            return array[0]
        } else if (op === "AND") {  
          return array.includes(false) ? false : true
        } else if (op === "OR") {
          return array.includes(true) ? true : false
        } else if (op === "XOR") {
          if (array.filter(el => el === true).length % 2 === 0){
            return false
          } else {
            return true
          }
        }
      }