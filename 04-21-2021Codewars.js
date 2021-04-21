//Alan Partridge II - Apple Turnover
/* Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.' */

function apple(x){
    if (x**2 > 1000) {
     return "It's hotter than the sun!!"
     } else {
       return "Help yourself to a honeycomb Yorkie for the glovebox."
     }
   }

//The Wide-Mouthed frog!
/* Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide. */

function mouthSize(animal) {
    if (animal.toLowerCase() === "alligator") {
    return "small"
    } else {
      return "wide"
    }
}

//Is there a vowel in there?
/*Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
If they are, change the array value to a string of that vowel.
Return the resulting array.*/

function isVow(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 97) {
        arr.splice(i, 1, "a")
    }
          if (arr[i] === 101) {
        arr.splice(i, 1, "e")
    }
          if (arr[i] === 105) {
        arr.splice(i, 1, "i")
            }
          if (arr[i] === 111) {
        arr.splice(i, 1, "o")
            }
          if (arr[i] === 117) {
        arr.splice(i, 1, "u")
            }
        } return arr;
    }


//has some string stuff
//noobCode 01: SUPERSIZE ME.... or rather, this integer!
/* Write a function that rearranges an integer into its largest possible value.
Example (Input --> Output)
123456 --> 654321
105 --> 510
12 --> 21 */

function superSize(num){
  let strNum = String(num)
  let arrNum = Array.from(strNum)
  let sortArrNum = arrNum.sort((a,b) => b-a)
  let reverseSortNum = sortArrNum.join("")
  let bigNum = parseInt(reverseSortNum)
  return bigNum
}