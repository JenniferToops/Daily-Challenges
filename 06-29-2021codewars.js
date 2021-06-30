//String ends with?

function solution(str, ending) {
    let endingLength = ending.length -1
    let strLength = str.length -1
    if (ending === "" || (str.includes(ending)) && (str[strLength] === ending[endingLength])) {
      return true
      } else {
      return false
    }  
  }