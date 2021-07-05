/* I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/

function generateShape(integer){
    let initialString = "+"
    let string = initialString.repeat(integer)
    let arrString = string.split(" ")
      for (let i = 0; i < integer-1; i++) {
        arrString.push(arrString[i])
      }
    return arrString.join("\n")
  }

/* Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"

So for this head: "------/------" you should return:

["-------------", "Unicorn"] */



  function bald(x){
    let xLength = x.length
    let str = "-"
    let dashStr = str.repeat(xLength)
    let xArray = x.split("")
    let slashArr = xArray.filter(el => el === "/")
    if (xArray.every(el => el === "-")) {
      return [dashStr, "Clean!"]
    } else if (slashArr.length === []) {
      return [dashStr, "Clean!"]
    }  else if (slashArr.length === 1) {
      return [dashStr, "Unicorn!"]
    } else if (slashArr.length === 2) {
      return [dashStr, "Homer!"]
    } else if (slashArr.length > 2 && slashArr.length <= 5) {
      return [dashStr, "Careless!"]
    } else {
      return [dashStr, "Hobo!"]
    }
  }

  