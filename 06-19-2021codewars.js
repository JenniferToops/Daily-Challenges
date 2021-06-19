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