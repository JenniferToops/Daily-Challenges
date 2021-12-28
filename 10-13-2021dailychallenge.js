//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function returnOnlyNums(arr) {
    return arr.map(el => Number(el))
}

console.log(returnOnlyNums(["3", 3, "22", 5]), [3, 3, 22, 5])

//--or--

function returnNums(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
        arr[i] = +arr[i]
        } 
    } return arr
}

//returnNums([3, "22", 5, "32"])
[3, 22, 5, 32]



//given an array of integers and return the average as an integer

function getAvg(array) {
    let sum = 0
for(let i = 0; i < array.length; i++) {
        sum += array[i]
   } console.log(sum / array.length)
    return Math.floor(sum / array.length)
}

getAvg(array)


function getAvg(array) {
    let sum = 0
for(let i = 0; i < array.length; i++) {
        sum += array[i]
   } console.log(sum / array.length)
    return Math.floor(sum / array.length)
}

getAvg(array)
