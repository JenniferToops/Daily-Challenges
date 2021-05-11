//Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!



//****** REDUCE *******/
/* Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

let arr = [1, 2, 3, 4]

function multiplyInt(arr) {
    return arr.reduce((acc, c) => acc * c);
}

/* You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age]. */

//example:
let array = [0, 13, 68, 40]

function minMaxDifference(array) {
    let sortedArr = array.sort((a, b) => a - b) 
    let minAge = sortedArr[0]
    let maxAge = sortedArr[sortedArr.length-1]
    let ageDiff = maxAge-minAge
    let finalArr = [minAge, maxAge, ageDiff]
    return finalArr
}

/*Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
Example:
[ 6, 2, 1, 8, 10 ] => 16
[ 1, 1, 11, 2, 3 ] => 6  */

let array = [0, 13, 68, 40]

function minMaxDifference(array) {
    let sortedArr = array.sort((a, b) => a - b) 
    sortedArr.pop()
    sortedArr.shift()
    return sortedArr
}