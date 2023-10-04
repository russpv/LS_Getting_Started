rlSync = require('readline-sync');
fname = rlSync.question("What is your given name? ");
lname = rlSync.question("What is your family name? ");
console.log(`Hello ${fname} ${lname}!`);
