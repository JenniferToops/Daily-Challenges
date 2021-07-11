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
    if ()

}


/* Leon (he/him - staff)

You will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase. */

function thereCanOnlyBeOneCase(str) {
    // i'll write it out long way
    let strArr = str.split('')
    let upperArr = strArr.filter(x => x.toUpperCase() === x)
    if (upperArr.length > .5 * strArr.length) {
      return str.toUpperCase()
    } else {
      return str.toLowerCase()
    }
  }

  function thereCanOnlyBeOneCase(str) {
    let strArr = str.split('')
    let upperArr = strArr.filter(x => x.toUpperCase() === x)
    if (upperArr.length > Math.floor(.5 * strArr.length)) {
      return str.toUpperCase()
    } else {
      return str.toLowerCase()
    }
  }

  function thereCanOnlyBeOneCase(str) {
    let uppers = []
    let lowers = []
    let strArr = str.split("")
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === strArr[i].toUpperCase()) {
        uppers.push(strArr[i])
        console.log(strArr[i])
    } else if (strArr[i] === strArr[i].toLowerCase()) {
        lowers.push(strArr[i])
        console.log(strArr[i])
    } 

    } if (uppers.length > lowers.length) {
        return str.toUpperCase()  
    } else if (lowers.length > uppers.length) {
        return str.toLowerCase()
    } else {
        return str.toLowerCase()
    }
}

function thereCanOnlyBeOneCase(str) {
    // here we remove spaces from our testing arrays as they mess up the count
    let strArr = str.split(' ').join('').split('')
    let upperArr = strArr.filter(x => x.toUpperCase() === x)
    if (upperArr.length > Math.floor(.5 * strArr.length)) {
      // note, our original string never had spaces removed, so it's all good
      return str.toUpperCase()
    } else {
      return str.toLowerCase()
    }
  }

  const convertString = s => s.split("").filter(x => x === x.toUpperCase()).length > s.length / 2 ? s.toUpperCase() : s.toLowerCase()

  const numArr = [1, 2, 3, 4, 5, 6, 7]
const numArr2 = [3, 4, 5, 6, 7, 8, 9]
const littleNums = nums => nums < 3
console.log(numArr.some(littleNums))

//chain two iterators

const useTwoIterators = numArr.filter(el => el > 2).reduce((acc, c) => acc + c, 0)
console.log(useTwoIterators)

const addArrays = numArr.map((el, i) => el + numArr2[i])
console.log(addArrays)

const numArr3 = [[1, 2], [3, 4], [5, 6], [7, 8]]

const flattenedArr = numArr3.reduce((acc, c) => acc.concat(c))
console.log(flattenedArr)

//
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(" ")
const betterWords = storyWords.filter(el => !unnecessaryWords.includes(el))