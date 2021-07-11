/*chicken sexing
Bob is a chicken sexer. His job is to sort baby chicks into a Male(M) and Female(F) piles. When bob can't guess can throw his hands up and declare it with a '?'.
Bob's bosses don't trust Bob's ability just yet, so they have paired him with an expert sexer. All of Bob's decisions will be checked against the experts choices to generate a correctness score.
Scoring Rules
When they agree, he gets 1 point.
When they disagree but one has said '?', he gets 0.5 points.
When they disagree completely, he gets 0 points. */


function correctness(bobDecisions, expertDecisions) {
    //params: bob's Decisions & expert's Decisions (M, F, ?) - strings
    //return: points (numbers): agree = 1, disagree = 0, guess = .5 per guess
    //example (below)
    //pseudo want to compare bob's decision array to expert array
    //if elements are equal, 1 point; if they don't match, they get 0 points; if one person guesses, .5 points
    //step 1: filter for exact matches
      let exactMatch = bobDecisions.filter((el, i) => el === expertDecisions[i])
      let partialMatchBob = bobDecisions.filter((el, i) => el !== expertDecisions[i] && el === '?')
      let partialMatchExpert = expertDecisions.filter((el, i) => el !== bobDecisions[i] && el === '?')
      return exactMatch.length*1 + partialMatchBob.length*(.5) + partialMatchExpert.length*(.5)
}