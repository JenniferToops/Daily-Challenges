/* Do you speak "english"?
*/

function spEng(sentence){
    return sentence.toLowerCase().includes("english")
  }

/* Multiples of 3 or 5 

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)
 */

function solution(number){
    let arr = []
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0) {
          arr.push(i)
      }
      else if (i % 5 === 0) {
        arr.push(i) 
      } 
    } return arr.reduce((acc, c) => acc + c, 0)
  }

/* Stop gninnipS My sdroW! */
  const spinWords = string => string.split(" ").map(el => el.length >= 5 ? el.split('').reverse().join('') : el).join(" ")


  /* Who likes it? */

  function likes(names) {
    if (names.length < 1) {
    return `no one likes this`
    } else if (names.length === 1) {
       return `${names} likes this`
      } else if (names.length === 2) {
          return `${names[0]} and ${names[1]} like this`
        } else if (names.length === 3) {
          return `${names[0]}, ${names[1]} and ${names[2]} like this`
        } else if (names.length > 3) {
          return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
        }
    }


    //object.create() practice

    const person = {
        isHuman: false,
        printIntroduction: function() {
            console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
        }
    }

    const me = Object.create(person) 

    me.name = 'Jenn'
    me.isHuman = false
    me.printIntroduction()
// My name is Jenn. Am I human? false