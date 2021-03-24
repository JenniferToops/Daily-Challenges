//Difference of Volumes of Cuboids

function findDifference(a, b) {
  return Math.abs((a.reduce((acc, c) => acc * c)) - b.reduce((acc, c) => acc * c));
}

//Convert boolean values to strings 'Yes' or 'No'.

const boolToWord = bool => (bool == true) ? "Yes" : "No";

//Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a, b) => a-b)
    return args[0]
  }
}

//Remove String Spaces

const noSpace = x => x.split("").filter(e => e !== " ").join("");