//SpeedCode #2 - Array Madness

function arrayMadness(a, b) {
    let totalA=a.reduce((acc,c) => acc + c**2,0)
    let totalB=b.reduce((acc,c) => acc+ c**3,0)
    if (totalA > totalB){
      return true
    } else {
      return false
    }
  }

//AddLength
function addLength(str) {
    //given a string with words, each word separated by a space
    //string never empty
    //add a space after each word and add length
    //return each word + length as an element in an array
    //turn string into array
    //map through the array and add the space plus the length to each element
        let arr = str.split(" ")
        let addLengthArr = arr.map(el => el + " " + el.length)
        return addLengthArr
  }

//pick a set of first elements
  function first(arr, n) {
    if( n == 0) {
      return []
    } else if (n == null) {
      return arr.slice(0, 1)
    } else {
      return arr.slice(0, n) 
    }
  }