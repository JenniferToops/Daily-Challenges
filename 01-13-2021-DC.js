Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array

//make an array
let myNums = [3, 4, 5, 6, 7, 8];

//create function
function addFirstAndLast(firstVal, lastVal) {

//sum of the first array value and last array value
firstVal = myNums[0];
lastVal = myNums[myNums.length-1];

//function should console log
console.log(firstVal + lastVal)
}

//invoke function
addFirstAndLast();