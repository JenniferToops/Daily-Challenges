//smallest product kata



//solution 1
function smallestProduct(arr) {
    // Code goes here
     return arr.map(nums => nums.reduce((acc, c) => acc * c, 1)).sort((a, b) => a-b).shift()
} 

//solution 2 (optimized)

function smallestProduct(arr) {
    const products = arr
     .map(nums => nums.reduce((cur, next) => cur * next, 1));
     
     let smallest = Infinity;
     for (const product of products) {
       if (product < smallest) {
       smallest = product
       }
     } return smallest
    }