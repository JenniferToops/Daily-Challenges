// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (fuelLeft * mpg >= distanceToPump) {
//     return 1
//   } else {
//     return 0
//   } 
// }

const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump? 1 : 0;

//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    let str = '';
    for (let i = 1; i <= num; i++) {
      str += `${i} sheep...`
    }  return str
  }


//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

  function removeExclamationMarks(s) {
    let sArray = Array.from(s)
    for (let i = 0; i < sArray.length; i++) {
     if (sArray[i] === "!") {
        sArray[i] = ""
      }
    } return sArray.join("")                                       
  }

//   You might know some pretty large perfect squares. But what about the NEXT one?
//   Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//   If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

  function findNextSquare(sq) {
    let root = sq**(1/2)
    if (root % 1 === 0) {
       return (root + 1)**2
    } else {
      return -1;
      }
  }

//refactored

  function findNextSquare(sq) {
    if (Number.isInteger(sq**(1/2))) {
      return (sq**(1/2) + 1)**2
    }
    return -1;
  }

  //Complete the function that receives as input a string, and produces outputs according to the following table:

  function getDrinkByProfession(param){
    job = param.toLowerCase()
    switch (job) {
    case 'jabroni': 
      return "Patron Tequila"
      break;
    case 'school counselor': 
      return "Anything with Alcohol"
      break;
    case 'programmer': 
      return "Hipster Craft Beer"
      break;
    case 'bike gang member': 
      return "Moonshine"
      break;
    case 'politician': 
      return "Your tax dollars"
      break;
    case 'rapper': 
      return "Cristal"
      break;
    default: 
      return "Beer"
      break; 
    }
  }


//   One hot summer day Pete and his friend Billy decided to buy watermelons. They chose the biggest crate. They rushed home, dying of thirst, and decided to divide their loot, however they faced a hard problem.

//   Pete and Billy are great fans of even numbers, that's why they want to divide the number of watermelons in such a way that each of the two parts consists of an even number of watermelons. However, it is not obligatory that the parts are equal.
  
//   Example: the boys can divide a stack of 8 watermelons into 2+6 melons, or 4+4 melons.
  
//   The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, whether they can divide the fruits in the way they want. For sure, each of them should get a part of positive weight.

  function divide(weight){  
    if (weight < 4) {
      return false
     } else if (weight % 2 === 0) {
       return true
       } else {
         return false
     }
   }

