//Please create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"!


//function with number & word params
function myFunction(word, number) {

//if length of word multiplied by the number is greater than 100
let wordLength = word.length
if (( wordLength * number ) > 100) {
    console.log(wordLength);
    let alertWord = "winner";
    let alertWordUpper = alertWord.toUpperCase();
    console.log(alertWordUpper);
    alert(`${alertWordUpper}!`);
} else {
    alert("Stop the press!");
}
}

myFunction("Supercalifragilisticexpialadociouseventhoughthesoundofitissomethingquiteatrociousifyousayitloudenoughyoullalwayssoundprecocioussupercalifragilisticexpealidocious", 50);

