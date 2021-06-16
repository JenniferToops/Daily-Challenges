//transform an array into a string

function transform(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === null) {
      array.splice(i, 1, "null")
    }
  }
  let newArr = array.filter(el => el !== NaN)
  let string = newArr.join("")
  return string
}

//Coding 3min: Father and Son
/* This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

Task:
Every uppercase letter is Father, The corresponding lowercase letters is the Son.

Give you a string s, If the father and son both exist, keep them. If it is a separate existence, delete them. Return the result.

For example:

sc("Aab") should return "Aa"

sc("AabBc") should return "AabB"

sc("AaaaAaab") should return "AaaaAaa"(father can have a lot of son)

sc("aAAAaAAb") should return "aAAAaAA"(son also can have a lot of father ;-) */


function sc(s){
    let sArr = s.split("")
    let newArr = []
    for (let i = 0; i < sArr.length; i++) {
    //"BANAna" == ["B", "A", "N", "A", "n", "a"]
      if (sArr[i] == sArr[i].toUpperCase()) {
        if (sArr.includes(sArr[i].toLowerCase())) {
         newArr.push(sArr[i])
        } 
      } else {
          if (sArr.includes(sArr[i].toUpperCase())) {
            newArr.push(sArr[i])
          } 
      }   
    } return newArr.join("")
  }

  /* Choo-king's alternate code:
  function sc(s){
  	//Create array for only upper case letters
    let uppers=s.match(/[A-Z]/g); 
  	//If there are no upper case letters, there are no father son pairs
    if (uppers==null) return "";
  	//Create array for only lower case letters
    let lowers=s.match(/[a-z]/g);
  	//If there are no lower case letters, there are no father son pairs
    if (lowers==null) return "";
  	//Filter lowers, keeping only the letters that appear in the uppers array
  	//The resulting array contains all the father son paired letters in their lower case form
    let fatherSonLetters=lowers.filter((elem)=>uppers.includes(elem.toUpperCase()));
  	//Return empty string if there are no father son pairs
    if (fatherSonLetters==null) return "";
  	//Filter the original string, keeping only letters that are part of father son pairs and return the result
    return(s.split('').filter((elem)=>fatherSonLetters.includes(elem.toLowerCase()))).join('');
} */