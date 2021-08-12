/* 
Remove anchor from URL 

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1') */

function removeUrlAnchor(url){
    let truncatedUrl
    let afterHash
  if (url.includes("#") || url.includes("?")) {
    afterHash = url.indexOf('#')
    truncatedUrl = url.substring(0, afterHash)
  } else {
      truncatedUrl = url
    }
  return truncatedUrl
}

// use replace() or split()

function removeUrlAnchor(url) {
    return url.replace(/#.+/ig, "");
  }

function removeUrlAnchor(u){
    return u.split('#')[0].toString();
  }

  /* multiples of 3 or 5 */

  function solution(number){
    let multiplesArr = []
    if (number === 0) {
      return 0
    } else {
      for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        multiplesArr.push(i)
        }
      }
    } return multiplesArr.reduce((acc, c) => acc + c, 0)
  }

/* sum of digits  
It involves implementing a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.
Digits can be a number or a string, and you should control it is no undefined and return an empty string.
To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.
*/

  function sum(digits) {
    let total = 0
    if (digits === undefined) {
        total = ""
    } else if (digits !== undefined) {
        total = String(digits).split("").map(el => Number(el)).reduce((acc, c) => acc + c, 0)
      }
    return digits === undefined ? "" : String(digits).split("").join(" + ").concat(` = ${total}`)
    } 