//Welcome to the city
function sayHello( name, city, state ) {
    //return string `Hello, ${name}! Welcome to ${city}, ${state}!`
    //join the array elements to create the name
    
    let newName = name.join(" ")
    return `Hello, ${newName}! Welcome to ${city}, ${state}!`
  }