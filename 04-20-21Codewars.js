//take a string, e.g. "string" and return the following pattern:
//"S-Tt-Rrr-Iiii-Nnnnn-Gggggg"

function accum(s) {
  let t = s.toLowerCase()
  let arrT = Array.from(t)
    let upperArr = arrT.map((e,i) => e[0].toUpperCase() + e.repeat(i))
    return upperArr.join("-")
}

//abbreviated version

function accum(s){
    return s.split('').map((el,i) => el.toUpperCase() + el.repeat(i)).join('')
    }

//also
function accum(s) {
    let t = s.toLowerCase()
    let arrT = Array.from(t)
    let upperArr = newArr.map((e) => e[0].toUpperCase() + e.slice(1))
    return upperArr.join("-")
}
