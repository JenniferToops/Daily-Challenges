/* Lost number in number sequence
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []). */

function findDeletedNumber(array1, mixArr) {
    let missingNum = []
    if (array1.length == mixArr.length) {
      return 0
    } else {
      missingNum = array1.filter(el => mixArr.includes(el) ? console.log(el) : missingNum.push(el) )
      } return Number(missingNum.join(""))
  }


  /* Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case */


function isIsogram(str){
    let strArr = str.toLowerCase().split("")
    let uniqueStrArr = [...new Set(str.toLowerCase())]
   
    if (strArr.join("") == uniqueStrArr.join("")) {
      return true
    } else {
      return false  
    }
  }
  
  //using regex (not my code):
  function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }

  /* Switcheroo 
  Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb' */

function switcheroo(x){
    x.split("")
    let strArr = []
    for (let i = 0; i < x.length; i++) {
      if (x[i] === "a") {
        strArr.push("b")
      } else if (x[i] === "b"){
          strArr.push("a")
        } else {
          strArr.push(x[i])
        }
    } return strArr.join("")
  }