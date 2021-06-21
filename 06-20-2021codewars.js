//refactored:
//remove the minimum

function removeSmallest(numbers) {
    //given an array
    //remove the element containing the smallest numeric value in the array
    //return the same array that no longer contains the smallest numeric value element in the original order (no sort)
    let newNums = [...numbers]
    console.log(newNums)
    let firstMin = Math.min(...newNums)
    console.log(firstMin)
    let firstIndex = newNums.indexOf(firstMin)
    console.log(firstIndex)
    newNums.splice(firstIndex,1)
    return newNums
  }

//refactored:
//filling in an array:

function arr(N) {
    let newArr = []
    for (let i = 0; i < N; i++) {
    newArr.push(i)
    } return newArr
  }

//refactored
//filling in the area of a square

const squareArea = A => Number(((2*A/Math.PI)**2).toFixed(2))

//refactored
//Thinkful - String Drills: Poem formatter

// function formatPoem(poem) {
//   return poem.replace(/\.\s/g, ".\n")
// }

const formatPoem = poem => poem.replace(/\.\s/g, ".\n")