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

  /* Alan Partridge III - London 
  Ever the learned traveller, Alan Partridge has pretty strong views on London:

"Go to London. I guarantee you'll either be mugged or not appreciated.
Catch the train to London, stopping at Rejection, Disappointment, Backstabbing Central and Shattered Dreams Parkway."
Your job is to check that the provided list of stations contains all of the stops Alan mentions. There will be other stations in the array. Example:

['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway']
If the stations all appear, return 'Smell my cheese you mother!', if not, return 'No, seriously, run. You will miss it. '.
*/
function alan(x){
    let stations = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway']
    if (x.includes(stations[0]) && x.includes(stations[1]) && x.includes(stations[2]) && x.includes(stations[3])) {
      return 'Smell my cheese you mother!'
    } else {
      return 'No, seriously, run. You will miss it.'
    }
  }

/* unique in order  Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

function uniqueInOrder(iterable) {
    let iterableArr = Array.from(iterable)
    let uniques = []
    return iterableArr.filter((el, i, arr) => arr[i] !== arr[i-1])
    }