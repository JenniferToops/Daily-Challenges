/* I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/

function generateShape(integer){
    let initialString = "+"
    let string = initialString.repeat(integer)
    let arrString = string.split(" ")
      for (let i = 0; i < integer-1; i++) {
        arrString.push(arrString[i])
      }
    return arrString.join("\n")
  }