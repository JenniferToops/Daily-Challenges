//Filling an array (part 1)

const arr = N => {
    let newArr = []
    for (let i = 0; i < N; i++) {
      newArr.push(i)
    } return newArr
  }

//Given the triangle of consecutive odd numbers:

const rowSumOddNumbers = n => n ** 3;

//List Filtering

function filter_list(l) {
    let newList = []
    for (let i = 0; i < l.length; i++) {
    if (typeof l[i] !== 'string') {
        newList.push(l[i])
    }
} return newList
}


//Odd or Even?

function oddOrEven(array) {
    const arraySum = array.reduce((acc, c) => acc + c, 0)
    if (arraySum % 2 !== 0) {
      return "odd"
     } else {
      return "even"
    }
  }

  const oddOrEven = array => array.reduce((acc, c) => acc + c, 0) % 2 ? "odd" : "even"

//Is this a triangle?
// function isTriangle(a,b,c) {
//   //the sum of any two sides of a triangle must be greater than the length of the third side 
//     if ((a + b > c) && (b + c > a) && (a + c > b)) {
//     return true
//     } else {
//     return false
//     }  
// }


const isTriangle = (a, b, c) => ((a + b > c) && (b + c > a) && (a + c > b)) ? true : false


