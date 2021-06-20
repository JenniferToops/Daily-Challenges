//needle in a haystack -- reafactored using arrow function

const findNeedle = haystack => `found the needle at position ${haystack.indexOf("needle")}`

// Simple Fun #176: Reverse Letter

function reverseLetter(str) {
    let strArr = str.split("")
    const regex = /[a-z]/gi
    let onlyLettersArr = strArr.filter(el => el.match(regex))
    let onlyLettersStr = onlyLettersArr.reverse().join("")
    return onlyLettersStr
  }

  //refactor Disemvowel Trolls

  function disemvowel(str) {
    //parameter is string
    //return needs to be a new string with vowels removed
    //example: "pretty baby needs a doll" returns "prtty bby nds dll"
    //pseudo: regex with no vowels or regex with vowels removed (case insensitive)
    const regex = /[aeiou]/gi
    let strArr = str.split("")
    let newStrArr = strArr.filter(el => !el.match(regex))
    let strStr = newStrArr.join("")
    return strStr
  }

  //Abbreviate a Two Word Name
  function abbrevName(name){
    // Param = string of name, will always have two words with a space between--may not always be uppercase
    // Return two uppercase initials separated by a period
    // Example: "Sarah Smith" => "S.S"
    // Pseudocode: split string into a word array, get index 0 for each element, 
    let nameArr = name.split(" ")
    let initialArray = nameArr.map((el) => el[0].toUpperCase())
    return initialArray.join(".")
  }

//alternative
  function abbrevName(name){
    const regex = /\s/
    let space = name.match(regex)
    let numberSpace = Number(space.index)
    let abbreviatedName = `${name[0]}.${name[numberSpace+1]}`
    return abbreviatedName.toUpperCase()
  }

//Number of People in the Bus
  var number = busStop => {
    //param = array containing element arrays with first index containing number of people getting onto the buz and the second index is people getting off of the bus
    //return the number of people still on the bus at the end of the array
    //example (see below)
    //pseudo: flatten the array, take odds and push them into "onbus" array, take evens and push them on to "offbus" array, then reduce each array, then subtract the even from the odd array to get the final number of individuals on the bus
  //   let flatBusStop  = busStop.flat()
    //for/of loop with accumulator

    let accum = 0
    for (elem of busStop) {
      accum = accum + elem[0] - elem[1]
    } return accum
  }

  //find the stray number
  
  function stray(numbers) {
    //pseudo: use first index, filter through the array
    //if the first element is not the unique element:
    let numbersArr = numbers.filter(el => el != numbers[0])
    if (numbersArr.length === 1) {
        return numbersArr[0]
      //if the first element is the unique element
      } else {
        return numbers[0]
      }
  }