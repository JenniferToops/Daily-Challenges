//Rock Paper Scissors!

const rps = (p1, p2) => {
    if ((p1 === 'paper' && p2 === 'paper') || (p1 === 'rock' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'scissors')) {
        return "Draw!"
    }  else if ((p1 === 'scissors' && p2 === 'paper') || (p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 ==='rock')) {
        return "Player 1 won!"
    }   else {
        return "Player 2 won!"
    }  
  }

//invisible cubes
/*Imagine there's a big cube consisting of n3 n^3n 
3
  small cubes. Calculate, how many small cubes are not visible from outside.

For example, if we have a cube which has 4 cubes in a row, then the function should return 8, because there are 8 cubes inside our cube (2 cubes in each dimension) */
function notVisibleCubes(n) {
    if (n < 3) {
      return 0
    } else {
      return (n-2) ** 3
    }
  }

  //What's the real floor?

  /* Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level. */

function getRealFloor(n) {
    //if n <= 0, return n
    //if n > 14, return n - 2
    //if n > 0, return n - 1
    if (n <= 0) {
      return n
    } else if (n >= 14) {
      return n - 2
    } else if (n > 0) {  
      return n - 1
    }
  }




