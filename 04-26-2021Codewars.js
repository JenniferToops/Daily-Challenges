/* Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw." *

function uefaEuro2016(teams, scores){
    //given 2 parameters; each parameter is an array
    //teams[0] & teams[1]
    //conditional scores[0] > scores[1]
    if (scores[0] === scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    } else if (scores[0] > scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    } else if (scores[0] < scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    }
  }

  /*
  A strange trip to the market
  You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "How much do people normally tip for something like this?" The artist looks up. "Its always gonna be about tree fiddy."

It was then that you realize the musician was a 400 foot tall beast from the paleolithic era. The Loch Ness Monster almost tricked you!

There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) It is a 400 foot tall beast from the paleolithic era B.) It will ask you for tree fiddy

Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty. */

function isLockNessMonster(s) {
  let underCaseString = s.toLowerCase()
  if (underCaseString.includes("tree fiddy") == true) {
    return "Your girlscout cookies are ready to ship. Your total comes to tree fiddy"
  } else if (underCaseString.includes("3.5") == true) {
    return "Your girlscout cookies are ready to ship. Your total comes to tree fiddy"
  }

}

