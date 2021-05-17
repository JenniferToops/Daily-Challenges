//Paul's Misery
/* Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1
The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!' */

function paul(x) {
    let miseryArr = []
    for (let i = 0; i < x.length; i++) {
      if (x[i] ==='kata') {
        miseryArr.push(5)
      } else if (x[i] === "Petes kata") {
        miseryArr.push(10)
      } else if (x[i] === "life") {
        miseryArr.push(0)
      } else if (x[i] === "eating") {
        miseryArr.push(1)
      }    
    }  console.log(miseryArr)
       let sumMisery = miseryArr.reduce((acc, c) => acc + c, 0)
       if (sumMisery < 40) {
         return 'Super happy!'
        } else if (sumMisery < 70) {
          return 'Happy!'
        } else if (sumMisery < 100) {
          return 'Sad!'
        } else {
          return 'Miserable!'
        }
  }

//   The Office III - Broken Photocopier

/*The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string. */

  function broken(x){
    let xArr = x.split("")
    let newArr = []
    for (let i = 0; i < xArr.length; i ++) {
      if (xArr[i] === '0') {
        newArr.push(1)
      } else if (xArr[i] === '1') {
        newArr.push(0)
        }
     } return newArr.join("") 
  }

//  The Office IV - Find a Meeting Room

/* Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!" */

  function meeting(x){
    if (!x.includes('O')) {
    return "None available!"
    } else {
      return x.indexOf('O')
    }
  }

//Array Appender

/* Write a function that appends the items from sequence 2 onto sequence 1, returning the newly formed sequence. Your function should also be able to handle nested sequences.

All inputs will be arrays/nested arrays.

For example:

['a','b','c'], [1,2,3]     --> ['a','b','c',1,2,3]
[['x','x'],'B'], ['c','D'] --> [['x','x'],'B','c','D'] */

  function appendArrays (arr1, arr2) {
    return arr1.concat(arr2)  
  }

//Largest pair sum in array

/* Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer. */

function largestPairSum(numbers) {
    let ascendingNums = numbers.sort((a, b) => a - b)
    return ascendingNums[ascendingNums.length-1] + ascendingNums[ascendingNums.length-2]
  }