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

function averageLength(arr) {
    const avg = Math.round(arr.join("").length / arr.length)
    return arr.map(el => e[0].repeat(avg))
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
    return iterableArr.filter((el, i, arr) => arr[i] !== arr[i-1])
    }

/* 
Count the number of cubes with paint on

Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

Examples:
countSquares(2) --> 26
countSquares(4) --> 98 */

    var countSquares = function(cuts){
        return cuts === 0 ? 1 : (((cuts + 1) ** 2) * (cuts + 1)) - ((cuts - 1) ** 2) * (cuts - 1)
      }

      //proper formula = 
      const countSquares = cuts => cuts === 0 ? 1 : (6 * cuts * cuts) + 2;