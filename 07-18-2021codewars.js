//Leap Years
/* 
Dashboard
Kata
Docs
Blog
Kumite
Forum
Leaders

5 kyu
841
7 kyu
Leap Years
762790% of 1,0104,898 of 9,754BattleRattle
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (5)
Discourse (81)
Translations
Collect|
In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
Examples can be found in the test fixture.*/

const isLeapYear = year => (year % 100 !== 0 && year % 4 === 0) || (year % 0 !== 0 && year % 400 === 0) ? true : false