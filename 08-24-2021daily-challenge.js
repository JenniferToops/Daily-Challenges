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