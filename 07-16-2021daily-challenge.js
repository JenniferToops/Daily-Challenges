function count(str) {
//set up empty object literal
//for loop
    let charCount = {}
    str.split('').forEach( x => charCount[x] ? charCount[x]++ : charCount[x = 1])
    return charCount
}
console.log(count('aba'), '{a: 2, b: 1')