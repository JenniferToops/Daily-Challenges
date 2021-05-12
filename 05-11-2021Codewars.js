// Price of Mangoes

/* There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free */

function mango(quantity, price){
    //first 2 mangoes = quantity*price, 3rd mango free
    // quantity/3 * price * 2
    return (quantity % 3 * price) + Math.floor(quantity / 3) * 2 * price 
  }


//Counting sheep...
/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). */

  function countSheeps(arrayOfSheep) {
    let arr = []
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] == true) {
        arr.push(1)
      } 
    } return arr.reduce((acc, c) => acc + c, 0)
  } 