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
