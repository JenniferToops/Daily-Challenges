//beginner series #3 Sum of Numbers

function getSum(a, b) {
    let sortedArr = [a, b].sort((a, b) => a - b)
      let sortedFullArr = []
    for (let i = sortedArr[0]; i <= sortedArr[sortedArr.length-1]; i++) {
      sortedFullArr.push(i)
    } return sortedFullArr.reduce((acc, c) => acc + c, 0)
  }