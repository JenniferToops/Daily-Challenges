//Area of a square
//given a square containing the length of 1/4 of a circle (where A = to the arc), find the area of the square 

function squareArea(A){
    let radius = (A * 2) / Math.PI
    let squareArea = radius**2
    return +(squareArea.toFixed(2))  
  }