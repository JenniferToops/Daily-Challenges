//Please create a function that takes in a number. Print all the numbers from 1 to that number in the console, but skip any number that when multiplied by three is divisible by 2.

//function takes in number
function myFunction(num)

//print all numbers from 1-num in console

console.log(i = 1; i <= num; i++)

//skip any (i * 3) % 2 === 0;

function myFunction(num) {
    for (let i = 1; i <= num; i++) {
        if ((i * 3) % 2 !== 0) {
        console.log(i);
        }
    }
}












//4-Month SubscriberPrime Gamingimranbmohamed: <form name="contact" method="POST" data-netlify="true"> <p> <label>Your Name: <input type="text" name="name" /></label> </p> <p> <label>Your Email: <input type="email" name="email" /></label> </p> <p> <label>Your Role: <select name="role[]" multiple> <option value="leader">Leader</option> <option value="follower">Follower</option> </select></label> </p> <p> <label>Message: <textarea name="message"></textarea></label> </p> <p> <button type=