//Reversing Words in a String
const reverse = string => string.split(' ').reverse().join(' ')

//Vowel remover
function shortcut(string) {
    const regex = /a|e|i|o|u/g
    return string.replace(regex, "")
  }