/* Simple beads count 

Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.*/

const countRedBeads = n => n < 2 ? 0 : (n * 2) - 2

 /* 
Even or Odd - Which is Greater? Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same" */

function evenOrOdd(str) {
    let strArr = str.split("").map(el => Number(el))
    let evenSum = strArr.filter(el => el % 2 === 0).reduce((acc, c) => acc + c, 0)
    let oddSum = strArr.filter(el => el % 2 !== 0).reduce((acc, c) => acc + c, 0)
    return evenSum > oddSum ? 'Even is greater than Odd': oddSum > evenSum ? 'Odd is greater than Even' : 'Even and Odd are the same'  
  }