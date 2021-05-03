//ARRAY METHOD
//Removing Elements
/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that! */

function removeEveryOther(arr){
    //remove every odd index
    //will never have an empty array
    //elements may be strings or numbers
      let newArr = []
      for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        newArr.push(arr[i])
      }
    } return newArr
  }

//Printing Array elements with Comma delimiters
/*Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a" */

  function printArray(array){
    //given an array with string elements separated by commas
    //return that string
    let newString = array.join(",")
    return newString
  }