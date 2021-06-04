//Miles per gallon to kilometers per liter

function converter (mpg) {
    //returns km/l based on m/g
    //1 gal = 4.54609188 litres
    //1 mile = 1.609344 kilometres
    return Number((mpg * 1.609344 / 4.54609188).toFixed(2).trim())
    
  }