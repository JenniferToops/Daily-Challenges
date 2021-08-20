/* V A P O R C O D E 
ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
*/

function vaporcode(string) {
    let arrayString = string.toUpperCase().split(" ").join("").split("")
    let spacedUpperCaseArrayString = arrayString.map((el, i, arr) => i !== arr.length-1 ? `${el}  ` : el)
    return spacedUpperCaseArrayString.join("")
  }

  /* 
a) Black
b) With Milk, Half and Half
c) Black with Sugar
d) Black with Artificial sweetner
e) With Milk and Sugar
f) With Milk and Artificial sweetner
g) With whatever you want! */

function randomCoffeeOptions() {
    const arrayOptions = ["Black","With Milk, Half and Half", 'Black with Sugar', 'Black with Artificial sweetner', "With Milk and Sugar", "With Milk and Artificial sweetner", "With whatever you want!"]
    let randomNumber = Math.random() * 100
    if (randomNumber < 14) {
        return `Today, you get ${arrayOptions[0]}!`
    } else if (randomNumber < 28) {
        return `Today, you get ${arrayOptions[1]}`
    } else if (randomNumber < 42) {
        return `Today, you get ${arrayOptions[2]}`
    } else if (randomNumber < 57) {
        return `Today, you get ${arrayOptions[3]}`
    } else if (randomNumber < 61) {
        return `Today, you get ${arrayOptions[4]}`
    } else if (randomNumber < 75) {
        return `Today, you get ${arrayOptions[5]}`
    } else if (randomNumber < 89) {
        return `Today, you get ${arrayOptions[6]}`
    } else {
        return `Today, you get ${arrayOptions[7]}`
    }
}

//daily challenge 08-19-2021
/*you are given an array prices where prices[i] is the price of a given stock on the ith day.
*/

function maxProfit(prices) {
    let min = Number.POSITIVE_INFINITY,
        max = 0

    for (let i = 0; i < prices.length-1; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else if ((prices[i] - min) > max) {
            max = prices[i] - min
        }
    }
    return max;
}

//this doesn't work--> you can't consider prices in the past in the comparison--only current prices compared to the next price
function maxProfit(prices) {
    let minimum = Math.min(...prices)
    let maximum = Math.max(...prices)
    return [minimum, maximum].reduce((acc, c) => Math.abs(acc - c))
   }
