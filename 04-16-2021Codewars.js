//Exes and Ohs

function XO(str) {
    if (str.length < 1) {
      return true
    }
    let arr = Array.from(str.toLowerCase())
    let x = []
    let o = []
    let misc = []
    if (!arr.includes("x")) {
        return false
      }
     if (!arr.includes("o")) {
        return false
      }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "x") {
          x.push(arr[i])
        } else if (arr[i] === "o") {
          o.push(arr[i])
        } else {
          misc.push(arr[i])
        } 
    } 
      if (misc === arr.length || x.length !== o.length) {
        return false
      } else if (x.length === o.length) {
        return true
      } 
  }

/*  Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
Square all numbers k (0 <= k <= n) between 0 and n.
Count the numbers of digits d used in the writing of all the k**2.
Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.*/

function nbDig(n, d) {
    let k = []
    let sqString = ""
    let dOccur = []
    for (i = 0; i <= n; i++) {
      k.push(i**2)
    } 
      sqString = String(k.join(""))
      splitSqString = sqString.split("")
      for (let i = 0; i < splitSqString.length; i++) {
        if (splitSqString[i] === String(d)) {
          dOccur.push(splitSqString[i])
        } 
      } return dOccur.length
}