//Quarter of the year

const quarterOf = (month) => {
    if (month < 4) {
     return 1
    } else if (month < 7) {
     return 2
    } else if (month < 10) {
     return 3
    } else {
     return 4
    }  
  }


//gravity flip

/* If you've completed this kata already and want a bigger challenge, here's the 3D version

Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

Examples:

flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]
*/

const flip=(d, a)=>{
    //if (d ==="R") ascending
    //if (d === "L") descending
    if (d ==="R") {
      return a.sort((a, z) => a - z)
    } else if (d === "L") {
      return a.sort((a, z) => z - a)
    }    
  }


//How many lightsabers do you own?
const howManyLightsabersDoYouOwn = name => name === "Zach" ? 18 : 0

//Keep up the hoop

/* Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it". */

// function hoopCount (n) {
//   if (n >= 10) {
//     return "Great, now move on to tricks"
//   } else {
//     return "Keep at it until you get it"
//   }
// }

const hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"

//Enumerable Magic #25 - Take the First N Elements

/* Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice */

// function take(arr, n) {
//   return arr.slice(0, n)
// }

const take = (arr, n) => arr.slice(0,n);

//Thinkful - Logic Drills: Traffic light

/* You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'. */

function updateLight(current) {
    if (current === "green") {
      return "yellow"
    } else if (current === "yellow") {
      return "red"
    } else if ( current === "red") {
      return "green"
    }
  }