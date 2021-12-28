
//DNA to RNA Conversion (refactoring)
/* Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'<div className=""></div>*/

const DNAtoRNA = dna => dna.split("").map(el => el === "T" ? "U" : el).join("")


//incrementer
/* Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 (and not 0).

Your result can only contain single digit numbers, so if adding a digit with it's position gives you a multiple-digit number, only the last digit of the number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that*/

const incrementer = nums => nums.length < 1 ? [] : nums.map((el, i) => Number((el + (i + 1)).toString().slice(-1)))
