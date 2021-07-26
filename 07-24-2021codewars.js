/* Training JS #8: Conditional statement--switch
Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+

*/

function howManydays(month){
    switch (month) {
      case 1:
        return 31;
        break;
      case 2:
        return 28;
        break;    
      case 3:
        return 31;
        break;
      case 4:
        return 30;
        break;
      case 5:
        return 31;
        break;
      case 6:
        return 30;
        break;
      case 7:
        return 31;
        break;
      case 8:
        return 31;
        break;
      case 9:
        return 30;
        break;
      case 10:
        return 31;
        break;
      case 11:
        return 30;
        break;
      case 12:
        return 31;
        break;
    }
  }

  function howManydays(month) {
    switch(month) {
      case 2:
        return 28;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30; 
        break;
      default:
        return 31;
    }
  }
  
  function howManydays(month) {
    switch(month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return 31;
          break;
        case 2:
          return 28;
          break;
        case 4:
        case 6:
        case 9:
        case 11:
          return 30;
          break;  
    }
  }

/* Training JS #16: Methods of String object--slice(), substring() and substr() */
/* The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work. */

  function cutIt(arr){
    let elLength = arr.map(el => el.length)
    let minimumEl = Math.min(... elLength)
    let truncatedEls = arr.map((el, i, arr) => el.slice(0, minimumEl))
    return truncatedEls
  }

/* Be Concise III - Sum Squares */

  const sumSquares = array => array.reduce((acc, c) => acc + c ** 2, 0)

  //JamesProDev: @oldcoderchick Set "bigfollows" as a "bad word" and they will get stopped by Automod


//   JamesProDev: @oldcoderchick Set "bigfollows" as a "bad word" and they will get stopped by Automod

/* No zeros for heros 
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway */

  function noBoringZeros(n) {
    if (n === 0) {
      return 0
    } else {
      let str = n.toString()
      const regex = /0+$/
      let trunc = str.replace(regex, "")
      return Number(trunc)
    }
  }

  const noBoringZeros = n => n && !(n % 10) ? noBoringZeros(n / 10) : n;
//basically, if the number n still is divisible by 10, recurse with n / 10
