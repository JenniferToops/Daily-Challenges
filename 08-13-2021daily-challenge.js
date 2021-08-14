/*
Given an array of items, reverse the order.
No reverse method! Unless that is your brute force first...*/

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]

function reverseOrder(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let halvedArr = Math.floor(arr.length / 2)


    }
}

/*Welcome! */

function greet(language) {
  
    let countries = {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso'
    }
    
    for (countries[language] in countries) {
      
      if (language === 'english') {
        return 'Welcome'
      }
      else if (language === 'czech') {
        return 'Vitejte'
      }
      else if (language === 'danish') {
        return 'Velkomst'
      }
      else if (language === 'dutch') {
        return 'Welkom'
      }
      else if (language === 'estonian') {
        return 'Tere tulemast'
      }
      else if(language === 'finnish') {
        return 'Tervetuloa'
      }
      else if (language === 'flemish') {
        return 'Welgekomen'
      }
      else if (language === 'french') {
        return 'Bienvenue'
      }
      else if(language === 'german') {
        return 'Willkommen'
      }
      else if (language === 'irish') {
        return 'Failte'
      }
      else if (language === 'italian') {
        return 'Benvenuto'
      }
      else if (language === 'latvian') {
        return 'Gaidits'
      }
      else if (language === 'lithuanian') {
        return 'Laukiamas'
      }
      else if (language === 'polish') {
        return 'Witamy'
      }
      else if (language === 'spanish') {
        return 'Bienvenido'
      }
      else if (language === 'swedish') {
        return 'Valkommen'
      }
      else if (language === 'welsh') {
        return 'Croeso'
      } 
      else {
        return 'Welcome'
      }
    }
    }  

    /* Is it a number? */
    function isDigit(s) {
        return !isNaN(s) && isNaN(parseFloat(s))
    }
    //thanks Yash!
//sort array by string length

function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
  };

  /*alphabet war*/

  function alphabetWar(fight) {
    let leftSide = 0
    let rightSide = 0
    for (let i = 0 ; i < fight.length; i++) {
      if (fight[i] === "w") {
          leftSide += 4
        } else if (fight[i] === "p") {
          leftSide += 3  
        } else if (fight[i] === "b") {
          leftSide += 2
        } else if (fight[i] === "s") {
          leftSide += 1
        } else if (fight[i] === "m") {
          rightSide += 4
        } else if (fight[i] === "q") {
          rightSide += 3  
        } else if (fight[i] === "d") {
          rightSide += 2
        } else if (fight[i] === "z") {
          rightSide += 1
        }
    }
    return leftSide > rightSide ? "Left side wins!" : rightSide > leftSide ? "Right side wins!" : "Let's fight again!"
  }

  /* remove duplicate words */

  function removeDuplicateWords (s) {
    let sArr = s.split(' ')
    return [... new Set(sArr)].join(" ")
  }