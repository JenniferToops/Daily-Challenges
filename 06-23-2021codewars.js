//refactored 'define a card suit'

// function defineSuit(card) {
//   if (card.includes("♣")) {
//     return 'clubs'
//   } else if (card.includes("♦")) {
//     return 'diamonds'
//   } else if (card.includes("♥")) {
//     return 'hearts'
//   } else {
//     return 'spades'
//   }
// }

const defineSuit = card => card.includes("♣") ? 'clubs' : card.includes("♦") ? 'diamonds' : card.includes("♥") ? 'hearts' :  'spades'