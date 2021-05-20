//Holiday VI-Shark Pontoon

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    //cut shark speed in half if dolphin
    if (dolphin) {
        sharkSpeed *=.5
    }
    return (pontoonDistance/youSpeed >= SharkDistance/sharkSpeed) ? 'Shark Bait!' : 'Alive!'
}

//pontoonDistance = 12m
//youSpeed = 4m/sec
//it'll take me 
//sharkDistance = 50m
//sharkSpeed = 8m/s


//Polish alphabet
//NEED TO FINISH
return String.split('').map(x => diaNorm[x]
})



//define a card suit
function defineSuit(card) {
    let ind = deck.indexOf(card)
    if (deck.indexOf(card) < 13) {
        return 'clubs'
    } else if (ind < 26) {
        return 'diamonds'
    } else if (ind < 39) {
     return 'hearts'
    }else if (ind < 52) {
     return 'spades'
    }
}
//crash override

function aliasGen(first, last){
    //check if first character of each string is in the dictionary
    //if it's not => return the error string
    //if it is => return the hacker name
    if (firstName[first[0].toUpperCase()] && surname[last[0].toUpperCase()]) {
  
      return firstName[first[0].toUpperCase()] + ' ' + surname[last[0].toUpperCase()]
    } 
      return 'Your name must start with a letter from A - Z.'
    }



//Take an Arrow to the knee, Functionally
  
    var ArrowFunc = function(arr) {
      return arr.map( x => String.fromCharCode(x)).join(''); //Complete this function
    }


//Greet Me

var greet = function(name) {
    let lowerCaseLetters = name.toLowerCase().slice(1, name.length)
    let upperCaseLetter = name[0].toUpperCase().slice(0,1)
    let fullName = upperCaseLetter + lowerCaseLetters
    return `Hello ${fullName}!`
  };