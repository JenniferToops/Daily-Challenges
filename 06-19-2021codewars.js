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