//add all whole numbers up to and including the given number
//the number will be an integer
//the number will be greater than zero

function sumNums(number) {
    //base case number === 1 (since number !== 0)
    let addedTotalNumbers = 0
    if (number === 1) {
        return 1
    }
    addedTotalNumbers = number + sumNums(number - 1)
    return addedTotalNumbers 
}