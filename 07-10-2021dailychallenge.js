/* Remove the spaces from the string, then return the resultant string. One solution must use filter! */
//any other type of data? empty strings? are we removing all spaces or just the outside?
//return string with no spaces, same case?
//E: "My dog is barking" -> "Mydogisbarking"
///   "   What      is happening?   ? ?" -> "Whatishappening??"


function removeSpaces(str) {
    let strArr = str.split(" ")
    let newArr = str.filter(el => el !== " ")
    return newArr.join("")
}

function removeSpaces(str) {
    return str.split('').filter(space => space !== ' ').join('')
  }

  function removeSpaces2(str){
    let newstr = ""
    for(let i = 0; i < str.length; i++){
      if(str[i] !== " "){
        newstr += str[i]
      }
    }
    return newstr
  }

  function removeSpaces(str) {
    return [...str].filter(x => x !== ' ').join('')
  }



/*
Write a function that returns a boolean comparing the sum of squares from array a and the sum of cubes from array b 
*/

const compareSumSquareSumCube(arrA, arrB) {
    if 

}

