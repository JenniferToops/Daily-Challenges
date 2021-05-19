//Ones and Zeros

/* Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4. */


const binaryArrayToNumber = arr => {
  // your code
  console.log(arr.reverse())
    let binaryArr = []
    for (let i = 0; i < arr.length; i++) {
      //arr[i] * 2**i gets pushed to new array
      binaryArr.push(arr[i]*(2**i))
  } return binaryArr.reduce((acc, c)=> acc + c)
};