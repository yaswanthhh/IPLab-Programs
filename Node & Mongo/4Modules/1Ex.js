// Importing the custom node module with the below statement
var c = require('./calculator');

var a = 5 , b = 2

console.log("Addition of " + a + " and " + b + " is " + c.add(a, b));

console.log("Subtraction of " + a + " and " + b + " is " + c.sub(a, b));

console.log("Multiplication of " + a + " and " + b + " is " + c.mul(a, b));

console.log("Division of " + a + " and " + b + " is " + c.div(a, b));