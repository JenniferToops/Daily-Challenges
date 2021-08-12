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
