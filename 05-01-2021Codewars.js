//Disemvoweled Trolls
/*rolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.*/
function disemvowel(str) {
    let strArr = str.split('');
    for (i = 0; i < strArr.length; i++) {
    if ((strArr[i].toLowerCase() === "a") || (strArr[i].toLowerCase() === "e") || (strArr[i].toLowerCase() === "i") || (strArr[i].toLowerCase() === "o") || (strArr[i].toLowerCase() === "u") ) {
    strArr.splice(i, 1);
      } 
    if ((strArr[i].toLowerCase() === "a") || (strArr[i].toLowerCase() === "e") || (strArr[i].toLowerCase() === "i") || (strArr[i].toLowerCase() === "o") || (strArr[i].toLowerCase() === "u") ) {
    strArr.splice(i, 1);
      } 
    } return strArr.join("");
}

//A needle in the haystack

//find "needle" in the array
//return message (as a string) that says "found the needle at position [index]"
function findNeedle(haystack) {
    let needle = haystack.indexOf("needle")
    return `found the needle at position ${needle}`
    }