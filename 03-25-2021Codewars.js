
//Convert a String to a Number!

var stringToNumber = str => parseInt(str);


//Vowel Count

function getCount(str) {
  var vowelsCount = 0;
  let strToArray = str.split("");
  vowelsCount = strToArray.filter((x) => ((x === "a") || (x === "e") || (x === "i") || (x === "o") || (x === "u")));
  return vowelsCount.length;
}


//Remove String Spaces

const noSpace = x => x.split("").filter(e => e !== " ").join("");