//transform an array into a string

function transform(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === null) {
      array.splice(i, 1, "null")
    }
  }
  let newArr = array.filter(el => el !== NaN)
  let string = newArr.join("")
  return string
}

//Coding 3min: Father and Son
/* This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

Task:
Every uppercase letter is Father, The corresponding lowercase letters is the Son.

Give you a string s, If the father and son both exist, keep them. If it is a separate existence, delete them. Return the result.

For example:

sc("Aab") should return "Aa"

sc("AabBc") should return "AabB"

sc("AaaaAaab") should return "AaaaAaa"(father can have a lot of son)

sc("aAAAaAAb") should return "aAAAaAA"(son also can have a lot of father ;-) */


function sc(s){
    let sArr = s.split("")
    let newArr = []
    for (let i = 0; i < sArr.length; i++) {
    //"BANAna" == ["B", "A", "N", "A", "n", "a"]
      if (sArr[i] == sArr[i].toUpperCase()) {
        if (sArr.includes(sArr[i].toLowerCase())) {
         newArr.push(sArr[i])
        } 
      } else {
          if (sArr.includes(sArr[i].toUpperCase())) {
            newArr.push(sArr[i])
          } 
      }   
    } return newArr.join("")
  }