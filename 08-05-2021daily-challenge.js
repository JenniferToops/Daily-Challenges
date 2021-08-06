

function missingVal() {
    const v = 'aeiou'
    for(let i in v) {
        if(String.toLowerCase().indexOf(v[i] === -1) {
            return i
        }
    }
}

const absentVowel = string =>
[...'aeiou'].findIndex(letter => !string.includes(letter))