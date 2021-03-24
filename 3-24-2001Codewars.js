//Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {  
    let newArr = []
    let sortedArr = numbers.sort((a, b) => a - b)
     newArr.push(sortedArr[0], sortedArr[1])
    return newArr.reduce((acc, c) => acc + c, 0)
  }


  //return the area of a square or the perimeter of a rectangle

const areaOrPerimeter = function(l , w) {
  if (l === w) {
    return l * w;
  } else {
    return ((l * 2) + (w * 2))
  }
};