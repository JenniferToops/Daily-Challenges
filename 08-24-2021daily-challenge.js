function containsDuplicate(arr) {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] + 1 || 1
    
        if (map[arr[i]] > 1) {
            return true
        }      
    } return false    
}
let arr = [1, 2, 6, 88, 3, 88]
console.log(containsDuplicate(arr))

/* 
Clean up after your dog
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

For example:

x=
[[_,_,_,_,_,_]
[_,_,_,_,@,_]
[@,_,_,_,_,_]]

bags = 2, cap = 2

return --> 'Clean'*/


function crap(x, bags, cap){
    let bagsCapacity = bags * cap
    let oneDArray = x[0].concat(x[1]).concat(x[2])
    let poops = 0
    
    if (oneDArray.includes('D')) {
      return "Dog!!"
    } else {
      for (let i = 0; i < oneDArray.length; i++) {
        if (oneDArray[i] === "@") {
          poops = poops + 1
        } 
      }
    } if (poops > bagsCapacity) {
        return "Cr@p"
    } else {
        return "Clean"
    }
  }