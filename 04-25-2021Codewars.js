//Welcome to the city
function sayHello( name, city, state ) {
    //return string `Hello, ${name}! Welcome to ${city}, ${state}!`
    //join the array elements to create the name
    
    let newName = name.join(" ")
    return `Hello, ${newName}! Welcome to ${city}, ${state}!`
  }


//Remove First and Last Character Part Two
function array(str){
    // given a CSV string
    // return a string that looks like the first one, but the commas 
    //           are replaced with spaces
    // if empty string, or string < string.length ===3, return null
      let length = str.length
      str = str.replace(/\s/g,"")
      let strArr = str.split(",")
      console.log(strArr)
      if (strArr.length < 3) {
        return null
        }
       else {
        strArr.shift()
        strArr.pop()
        console.log(strArr)
        return strArr.join(" ")
      }
  }

  //Average Scores (array method)
  function average(scores) {
    let averageScores = Math.round(scores.reduce((acc, c) => acc + c, 0) / scores.length)
    return averageScores
}