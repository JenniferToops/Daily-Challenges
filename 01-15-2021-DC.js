Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers. 

//array
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function oddArray(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        let newArr = [];
        if (myArray[i] % 2 !== 0) {
            newArr.push(myArray[i]);
            return newArr;
            // console.log(myArray[i]);
            // return(myArray[i]);
        }
    }
}
oddArray(myArray);


let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const oddArray = myArray.map(myItem => {

            if (myItem % 2 !== 0) {
            return myItem;
}
})//
console.log(oddArray);
VM47:10 (20) [1, undefined, 3, undefined, 5, undefined, 7, undefined, 9, undefined, 11, undefined, 13, undefined, 15, undefined, 17, undefined, 19, undefined]





//JenniferYesterday at 6:20 PM
//Speaking of testing our code... can someone tell me why I'm getting "undefined" after the returned array element?

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const oddArray = myArray.map(myItem => {

            if (myItem % 2 !== 0) {
            return myItem;
}
})
console.log(oddArray);

const anotherOddArray = myArray.filter(myArray => {
    if(myArray[i] % 2 !== 0) {
        return myArray[i];
    }
})





//VM47:10 (20) [1, undefined, 3, undefined, 5, undefined, 7, undefined, 9, undefined, 11, undefined, 13, undefined, 15, undefined, 17, undefined, 19, undefined]
//fierydrakeYesterday at 6:44 PM
//The map function constructs a new array with the same number of elements as the array it is called on, but each element of the new array is the result of running the function you provide as the argument the element in the same position of the original array.
//However, your function does not return a value for the elements that are not even, which means the return value of the function is implicitly undefined. Therefore each even element is mapped to undefined in the new (result) array
//Question: What will this code output?
//console.log([1,2,3,4,5].map(item => 1))

//And this?
//console.log([1,2,3,4,5].map(function(item) {}))

//**************************************************************THIS VERSION IS THE WINNER!!!******************************************** */
﻿
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const anotherOddArray = myArray.filter(item => {
    if(item % 2 !== 0) {
    return item;
    }
})
console.log(anotherOddArray);
VM62:10 
(10) [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
0: 1
1: 3
2: 5
3: 7
4: 9
5: 11
6: 13
7: 15
8: 17
9: 19
length: 10
__proto__: Array(0)