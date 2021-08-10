/* altered fizzbuzz 
Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”. */

function fizzBuzz(num) {
    let fizzBuzzArr = []
    for(let i = 1; i <= num; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            fizzBuzzArr.push('FizzBuzz')
        } else if (i % 2 === 0) {
            fizzBuzzArr.push('Fizz')
        } else if (i % 3 === 0) {
            fizzBuzzArr.push('Buzz')
        } else {
            fizzBuzzArr.push(i)
    } 
}    return fizzBuzzArr
}


/* Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! */ 

str = "It's Hot Outside"

function reverseChars(str) {
    let reversedStrArr = []
    let strArr = str.split("")
    for (let i = str.length; i >= 0; i--) {
        reversedStrArr.push(strArr[i])
    }
    return reversedStrArr.join("")
}

//easy way: 
function reverseIt(str) {
    return str.split("").reverse().join("")
}


reverseChars(str)
"edistuO toH s'tI"

