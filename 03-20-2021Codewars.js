// Opposites Attract 
//function lovefunc(flower1, flower2) {
//   //conditional if timmyflower == even && sarahflower == even then false 
//   // else true
//   if (flower1 % 2 === 0 && flower2 % 2 === 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

const lovefunc = (flower1, flower2) => (flower1 % 2 == 0 && flower2 % 2 == 0) || ((flower1 + flower2) % 2 == 0) ? false : true

//Find numbers which are divisible by given number

function divisibleBy(numbers, divisor){
  let newArray = []
  for (let i = 0; i <= numbers.length; i++)
  if (numbers[i] % divisor === 0 || numbers[i] == 0) {
      newArray.push(numbers[i])
      }
  return newArray
console.log(newArray)
}

