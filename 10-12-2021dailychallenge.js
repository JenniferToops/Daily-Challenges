//create a function that allows a nameand unlimited boolean values as paramaters and returns the name and whether the person is a homie or phony based on whether there are 2 or more "true" values given

function homieOrPhony(){
    let friendName = arguments[0];
    let homiePoints = [...arguments].slice(1).reduce((prev,curr) => prev + curr);
    if (homiePoints >= 2){ 
        console.log(`${friendName} is the homie!!!`) 
    } else { 
        console.log(`${friendName} is basic`)
    }
}

homieOrPhony("jake", true, false, false, false)
//jake is basic

homieOrPhony("john", true, true, false, false, false, false, false)
//john is the homie!!!