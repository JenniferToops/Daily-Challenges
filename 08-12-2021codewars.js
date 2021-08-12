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