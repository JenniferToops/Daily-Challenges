/*Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */

function arrayDiff(a, b) {
  //params: array a & array b
  //return: [a] with all elements EXCEPT those equal to elements in [b]
  //example: a = [1, 3, 3, 5], b = [2, 3], returns [1, 5]
  //pseudo 1: map through array a and if the element is included in array b, remove it; else, return the element
    if (a.length < 1) {
      return a
    } else {
        return a.filter(el => !b.includes(el))
      } 
  }

  //or

  const arrayDiff = (a, b) => a.length < 1 ? a : a.filter(el => !b.includes(el))
  