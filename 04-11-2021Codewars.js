//Now you have to write a function that takes an argument and returns the square of it.

const square = num => num**2

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
// Let's look at a few examples:
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n){
    for (let i = 0; i <= array.length; i++) {
      if (n < 0 || n > (array.length -1)){
        return -1
      } else if (i === n) {
        return (array[i])**n
      } 
    }  
  }

//  Rock Paper Scissors
//  Let's play! You have to return which player won! In case of a draw return Draw!.
//  scissors beat paper
//  paper beats rock
//  rock beats scissors
