/* You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique. */

// param - 2 strings, one indicates jewels based on e
// return - how many characters are gems in number type
// example - jewels = 'aAB', stones = 'aAABBbbbb'
// return - 5
// pseudo - turn both strings into arrays, then filter through the larger array to find matches and push the matches into another array, then find the length of that array to determine the number of jewels.

function findTheJewels(jewels, stones) {
    let jewelsArray = jewels.split("")
    let stonesArray = stones.split("")
    let jewelsInTheStonesArray = stonesArray.filter(el => jewelsArray.includes(el))
    return jewelsInTheStonesArray.length
}