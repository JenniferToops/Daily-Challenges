/* Club Doorman:
The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.

Every given word has a doubled letter, like 'tt' in lettuce.

To answer the right number you need to find the doubled letter's position of the given word in the alphabet and multiply this number per 3.

It will be given only words with one doubled letter.


EXAMPLE
Lettuce is the given word. 't' is the doubled letter and it's position is 20 in the alphabet.

The answer to the Club Doorman is 20 * 3 = 60 */

function passTheDoorMan (word){
    let alphaString = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i+1]) {
        return (alphaString.indexOf(word[i])+1) * 3
      }
    }
  }


  /* Coding dojo exercise:
  // # Sort Window
// 
// Given an array of integers out of order, determine the bounds of the smallest
// window that must be sorted in order for the entire array to be sorted. For example,
// given [3, 7, 5, 6, 9], you should return (1, 3).
// 
// ## Business Rules/Errata
// 
// - Your input will be an array of unsigned integers..


// - An empty array is considered to be sorted.
// - You should return an array, with the first element containing the 'start' of the
//   window, and the second element containing the 'end' of the window.
// - If your input array is already sorted, return an empty array.
// - Note: Some of the elements inside the unsorted window may actually be in the
//   correct order for the final sorted array.
*/

function sortWindow(input) {
    // Insert your solution code here
    // sort copy of array
    let sortedArr = [...input].sort((a, b) => a - b)
    // console.log(sortedArr)
    let startStopArr = []
    if (input.length <= 1) {
        return []
    } 
    for (let i = 0; i <= input.length; i++) {
        if (i === input.length) {
            return []
        }
        if (input[i] !== sortedArr[i]) {
            startStopArr.push(i+1)
            break
        } 
    }
    for (let i = input.length-1; i >= 0; i--) {
        if (input[i] !== sortedArr[i]) {
            startStopArr.push(i+1)
            break
        } 
    } 
    return startStopArr
}