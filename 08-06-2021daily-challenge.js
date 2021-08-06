/*
The average length
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
*/

function averageLength(arr) { 
    let elLength = arr.map(el => el.length)
    let avgElLength = Math.round(elLength.reduce((acc, c) => acc + c) / arr.length)
    return arr.map((el) => el[0].repeat(avgElLength))
  }