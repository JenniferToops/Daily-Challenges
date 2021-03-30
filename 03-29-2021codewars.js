// Given an integral number, determine if it's a square number:

var isSquare = function(n){
    if ((n >= 0) && (Number.isInteger(Math.sqrt(n)) === true)) {
    return true;
  } else {
    return false;
    }
  }

//Make a simple function called greet that returns the most-famous "hello world!".
const greet = () => "hello world!";


// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
    return Math.floor(time/2);
  }