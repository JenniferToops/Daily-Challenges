/*Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

*For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
*Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

*Test.assertEquals(solve([[1,2],[4],[5,6]]),4);
*Test.assertEquals(solve([[1,2],[4,4],[5,6,6]]),4);
*Test.assertEquals(solve([[1,2],[3,4],[5,6]]),8);
*Test.assertEquals(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);
*/
/*pseudocode: need to make each nested array unique
then I need to count the length of each array
then I need to multiply each calculated length
return number
*/

const solve = arr =>  arr.map((el) => [...new Set(el)].length).reduce((acc, c) => acc * c)

function unique(array) {
    let newArray = array.map((el) => [...new Set(el)].length)
    let num = newArray.reduce((acc, c) => acc * c)
    return num
}

//Different situation with removing duplicates in a multi-dimensional array
var removeDuplicates = function(nums) {
    let unique = [...new Set(nums)]
    unique.forEach((uniqueNum, i) => {
        nums[i] = uniqueNum
    })
    return unique.length
}