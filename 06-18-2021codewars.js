//complementaryDNA


function DNAStrand(dna){  
    //param is string containing dna characters
    //return is complementary string
    //the string will never be empty
    //example, may have be provided string "AAAA" and it should return "TTTT"
    //turn dna string to array, filter for A, T, C, G (I think I need to nest 4-for loops)
    //return joined dna complement string
    let dnaArray = dna.split("")
    let complementaryDnaArray = []
    for (let i = 0; i < dnaArray.length; i++)     {
      if (dnaArray[i] === "A") {
        complementaryDnaArray.push("T")
        } else if (dnaArray[i] === "T") {
            complementaryDnaArray.push("A")
        } else if (dnaArray[i] === "C") {
            complementaryDnaArray.push("G")
        } else if (dnaArray[i] === "G") {
            complementaryDnaArray.push("C")
        }
      }   return complementaryDnaArray.join("")
  }