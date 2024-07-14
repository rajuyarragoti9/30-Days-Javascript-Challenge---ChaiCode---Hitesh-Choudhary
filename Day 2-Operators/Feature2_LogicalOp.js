//Create a script that compares two numbers using different comparison operators 
//and combines conditions using logical operators, logging the results.

// File: feature2.js
let a = 10;
let b = 20;

console.log(a > b); // Output: false
console.log(a < b); // Output: true
console.log(a >= b); // Output: false
console.log(a <= b); // Output: true
console.log(a == b); // Output: false
console.log(a === b); // Output: false

let condition1 = (a < b);
let condition2 = (a > 5); 

console.log(condition1 && condition2); // Output: true
console.log(condition1 || condition2); // Output: true
console.log(!condition1); // Output: false
