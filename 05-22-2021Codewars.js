//reverse words

const reverseWords = str => str.split("").reverse().join("").split(" ").reverse().join(" ")

//two to one

function longest(s1, s2) {
    let bothStr = s1.concat(s2)
    const uniqueArr = Array.from(new Set(bothStr)).sort().join("")
    return uniqueArr
  }

  //shorter concat

  function shorter_reverse_longer(a,b){
    //return shorter+reverse(longer)+shorter
    let aLength = a.length
    let bLength = b.length
      if (a.length === 0 && b.length === 0) {
        return ''
      } else if (a.length >= b.length) {
      return b + a.split("").reverse().join("") + b
      } else if (b.length > a.length) {
      return a + b.split("").reverse().join("") + a
      } 
  }

  //multiply characters

  const spam = number => "hue".repeat(number)

  //friend or foe

  const friend = friends => friends.filter(el => el.length === 4)

