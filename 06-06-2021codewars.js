// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()


// function howManySmaller(arr,n){
//   let newArr = arr.map(el => el.toFixed(2))
//   let number = newArr.filter(el => el < n)
//   return number.length
// }

const howManySmaller = (arr, n) => arr.filter(el => el.toFixed(2) < n).length