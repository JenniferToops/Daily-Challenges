//disemvowel trolls

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

//a needle in the haystack
//find "needle" in the array
//return message (as a string) that says "found the needle at position [index]"
function findNeedle(haystack) {
    let needle = haystack.indexOf("needle")
    return `found the needle at position ${needle}`
    }