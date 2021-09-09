//Count the divisors of a number

function getDivisorsCnt(n){
    let counter = 0
    if (n === 1) {
      return 1
    } else {
      for (let i = n / 2; i >= 1; i--) {
        if (n % i === 0) {
          counter += 1
        } 
      }  
    }
    return counter + 1
  }

  //other people's nice code:

  function getDivisorsCnt(n) {
    var div = 0;
    for(var i = 1; i <= n; i++) if(n % i == 0) div++;
    return div;
  }