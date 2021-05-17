//Small enough?-Beginner
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
    let newArr = a.filter(el => el > limit)
    console.log(newArr)
    if (newArr.length > 0) {
    return false
    } else {
    return true
    }
}

//Evens times last

/* Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0. */

function evenLast(numbers) {
    if (numbers.length < 1) {
      return 0  
    } else if (numbers.length > 0) {
      let evens = numbers.filter((el, index) => index % 2 === 0)
      console.log(evens)
      let evensSum = evens.reduce((acc, c) => acc + c, 0)
      console.log(evensSum)
      return evensSum * numbers[numbers.length-1]
    }  
  }

  //JavaScript Array Filter

  /* JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6] */

  function getEvenNumbers(numbersArray){
    return numbersArray.filter(el => el % 2 === 0)
  }