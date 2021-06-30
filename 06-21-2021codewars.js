//splice practice

//remove the 2nd index and replace it with the array containing 2 & 5

let arr = [1, 5, 3, 8 ,4]

function changeOrder(arr) {
    newArr = arr.splice(2, 1, [2, 5])
    return newArr
}

//[1, 5, Array(2), 3, 8, 4]

0: 1
1: 5
2: (2) [2, 5]
3: 3
4: 8
5: 4
length: 6