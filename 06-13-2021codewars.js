//Who is going to pay for the wall?
/* Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"*/


function whoIsPaying(name){
    let drumphetArr = []
    if (name.length > 2) {
      let drumphetArr = name.split("")
      let drumphetName = drumphetArr.slice(0, 2).join("")
      let drumphetArrayName = [name, drumphetName]
      return drumphetArrayName
    } else {
      return [name]
  }
  }

//   type of sum
//Return the type of the sum of the two arguments
const typeOfSum = (a, b) => (typeof a === "string") || (typeof b === "string") ? "string" : "number"

//Which triangle is that?


var typeOfTriangle = function (sideA, sideB, sideC) {
  // params are sideA, sideB, sideC
  // if isosceles = 2 sides the same, 1 not
  // if equilateral = 3 sides the same
  // if scalene = no sides the same
  // if invalid triangle has length < 1, is a float, no side given, or param give is not a number
  if ((isNaN(sideA)|| isNaN(sideB) || isNaN(sideC)) || (sideA < 1 || sideB < 1 || sideC < 1) || (sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB)) {
        return "Not a valid triangle"
  } else if ((sideA === sideB && sideB === sideC && sideA === sideC)) {
      return "Equilateral"
  } else if ((sideA === sideB && sideC || sideB === sideC || sideA ===sideC)) {
      return "Isosceles"
  } else if ((typeof sideA === "number" && typeof sideB === "number" && typeof sideC === "number")) {
      return "Scalene"
  } 
}