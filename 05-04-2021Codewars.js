//Multiple of index

function multipleOfIndex(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] % i === 0) {
        newArray.push(array[i])
      }  
    } return newArray
  }

//Find Mean

/* Find the mean (average) of a list of numbers in an array.
Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
For an example list of 1, 3, 5, 7
1. Add all of the numbers
1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
16/4 = 4
3. The mean (or average) of this list is 4 */

var findAverage = function (nums) { 
    return nums.reduce((acc, c) => acc + c, 0)/nums.length  
  }


//To square(root) or not to square(root)

  function squareOrSquareRoot(array) {
    let squareArray = []  
    for (let i = 0; i < array.length; i++) {
      if (Math.sqrt(array[i]) % 1 === 0) {
        squareArray.push(Math.sqrt(array[i]))
      } else {
        squareArray.push(array[i]**2)
      }
    } return squareArray; 
  }

//   Filter out the geese
/*Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.*/
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(el => !geese.includes(el))
  };