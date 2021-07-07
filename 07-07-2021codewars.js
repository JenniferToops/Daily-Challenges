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

 /*Printer Errors 
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22" */

function printerError(s) {
    let str = s.split("")
    let outliers = str.filter(el => el === "n" || el === "o" || el === "p" || el === "q" || el === "r" || el === "s" || el === "t" || el === "u" || el === "v" || el === "w" || el === "x" || el === "y" || el === "z" )
    return `${outliers.length}/${str.length}`
    }
 