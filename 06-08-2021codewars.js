//beConciseIV - index of an element in an array
/*Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.*/

const find = (a, el) => a.length < 0 || a.indexOf(el) === -1 ? "Not found" : a.indexOf(el) 

//for UFC fans (total beginners): conor McGregor vs George Saint Pierre

const quote = fighter => fighter.toLowerCase() === `george saint pierre` ? `I am not impressed by your performance.` : `I'd like to take this chance to apologize.. To absolutely NOBODY!`

//Is it a palindrome?

const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split("").reverse().join("") ? true : false