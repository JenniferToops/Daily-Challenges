/*refactoring practice: Thinkful - Logic Drills: Traffic light
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'. */

const updateLight = current =>  current === "green" ? "yellow" : current === "yellow" ? "red" : "green"

/*refactored: Jenny's secret Message 
 Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
 Test.assertEquals(greet("Jim"), "Hello, Jim!");
 Test.assertEquals(greet("Johnny"), "Hello, my love!");
 */

 const greet = name => name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`