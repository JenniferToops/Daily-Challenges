//altERnaTINGcAsE<=>altERnaTIng CaSe

String.prototype.toAlternatingCase = function () {
    let nString = this.split("")
    let arr = []
    for (let i = 0; i < this.length; i++) {
        if (nString[i] === nString[i].toLowerCase()) {
            console.log(nString[i])
            arr.push(nString[i].toUpperCase())
        } else if (nString[i] === nString[i].toUpperCase()) {
            arr.push(nString[i].toLowerCase())
        }    
    } return arr.join("")
}