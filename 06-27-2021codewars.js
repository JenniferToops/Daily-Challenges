/* Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1
The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!' 
*/


function paul(x) {
    //giving me an array of things paul is doing, each thing is worth a certain number of points
    //returning paul's mental state based on the accumulated points where less than 40 is 'super happy', etc.
    //examples below: array containing ['life', 'eating', 'life'] is equal to points 0, 1, 0, which add up to 1, which (added) equals 1, so the return is 'Super happy!'
    //pseudo: filter by the misery score, find lengths for each, reduce
      let counterArr = []
        if (x.includes('life')) {
          let life = x.filter(el => el === 'life').length * 0
          counterArr.push(life)
        }
        if (x.includes('eating')) {
          let eating = x.filter(el => el === 'eating').length
          counterArr.push(eating)
        }
        if (x.includes('kata')) {
          let kata = x.filter(el => el === 'kata').length * 5
          counterArr.push(kata)
        }
        if (x.includes('Petes kata')) {
          let petesKata = x.filter(el => el === 'Petes kata').length * 10
          counterArr.push(petesKata)
        }
        let counters = counterArr.reduce((acc, c) => acc + c, 0)
        if (counters < 40) {
          return 'Super happy!'
        } else if (counters < 70) {
          return 'Happy!'
        } else if (counters < 100) {
          return 'Sad!'
        } else {
          return 'Miserable!'
        }
  }

// compare within margin
// crazy terrible instructions, just read examples and guess

  function closeCompare(a, b, margin = 0){
    let dist = Math.abs(a - b)
   
    if (margin >= dist) {
        return 0
      }
      else if (margin === 0 || margin < dist) {
      if (a < b) {
      return -1
      } else if (a > b) {
        return 1
      } else if (a === b) {
        return 0
      } 
    }
  }