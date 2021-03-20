//Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function. 

//names array outside of function
let personNames = ["Moe", "Larry", "Curly"];

//function that takes in the name of a person
function addName() {
//function adds person to names array
    let newName = personNames.push()
//new name position in array
    console.log(`You are the ${personNames.indexOf(newName)} on the list!`);
}

addName("Percival");
