/* refactored Lost number in number sequence
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []). */

function findDeletedNumber(arr, mixArr) {
    if (arr.length == mixArr.length) {
      return 0
    }
    return Number(arr.filter(el => !mixArr.includes(el)))
  }

  const findDeletedNumber = (arr, mixArr) => arr.length == mixArr.length ? 0 : Number(arr.filter(el => !mixArr.includes(el)))



//Driving school series #1
/* Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.


Example:

[10,10,10,18,20,20] --> 12 */

function passed (list) { 
    let filteredList = list. filter(el => el < 19)
    return filteredList.length < 1 ? "No pass scores registered." : Math.round(filteredList.reduce((acc, c) => acc + c, 0) / filteredList.length)
  } 