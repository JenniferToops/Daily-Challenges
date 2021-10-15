//in a given array, find all values that occur only once and return the sum

function findSingles(array) {
    return array.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el)).reduce((acc, c) => acc + c, 0) 
}

findSingles([4, 5, 6, 5, 4, 8, 9])
23
