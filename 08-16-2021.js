/* 
Exclamation marks series #2: Remove all 
Remove all exclamation marks from the end of sentence.
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi" */

function remove(s){
    return s.replace(/!*$/, "")
    }
