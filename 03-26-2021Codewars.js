
//Sum The Strings

function sumStr(a,b) {
 if ((!a && !b) || ((a === "") && (b === ""))) {
    return "0"
 } else if ((!a) || (a === "")) {
    return b.toString()
  } else if ((!b) || (b === "")) {
    return a.toString();
  } else {
  let nums = (parseInt(a) + parseInt(b))
  return nums.toString()
 }
}



//Grasshopper - Summation

function summation(num) {
    sum = 0
for(let start = 1; start <= num; start++) {
    sum += start;
} return sum;
}

//Get the Middle Character

function getMiddle(string) {
  let midArrStr = string.split('').length / 2;
  if (midArrStr % 1 !== 0) {
    return string.charAt(Math.floor(midArrStr));
  } else {
    return string.charAt(Math.floor(midArrStr - 1)) + string.charAt(Math.floor(midArrStr));
  }
}