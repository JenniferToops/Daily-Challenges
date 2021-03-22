// return masked string where only last 4 digits remain, e.g.-- ########1234
function maskify(cc) {
    let ccArr = cc.split("")
    for (let i = 0; i < ccArr.length; i++) {
        if (i < ccArr.length-4) {
        ccArr[i] = "#"
        } else {
        ccArr[i]
        }
    }  return ccArr.join("");
    }

    //sort and star -- 
    /*You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.*/

    const twoSort = s => s.sort().shift().split("").join(""+"***");