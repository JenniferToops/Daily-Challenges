// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

function numberInPostion(arr){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return arr.map(word => word.split("").filter((l,i) => l.toLowerCase() === alphabet[i]).length)
  }

  function numberInPosition(arr) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    arr.map(s => s.toLowerCase().split('').filter(e, i) => i ===alphabet.indexOf(e).length)
  }
  
  function numberInPostion2(arr){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return arr.map(word => word.split("")
    .reduce((a,c,i) => a + (c.toLowerCase() === alphabet[i] ? 1 : 0),0))
  }
    
  console.log(numberInPostion(["abode","ABc","xyzD"]), [4, 3, 1])
  console.log(numberInPostion(["abide","ABc","xyz"]),[4,3,0])
  console.log(numberInPostion(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7])
  console.log(numberInPostion(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3])
  
  console.log(numberInPostion2(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7])
  console.log(numberInPostion2(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3])

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
function findUniq(arr) {
    arr.sort((a, b) => a -b )
    return arr[0] === arr[1] ? arr.pop() : arr[0]
}
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
findUniq([1, 1, 1, 2, 1, 1 ])