
// Create a script that demonstrates the
// difference in behavior between let and const when it comes to reassignment.

let letVar = 10;
console.log(letVar); // Output: 10

letVar = 20;
console.log(letVar); // Output: 20

const constVar = 30;
console.log(constVar);
 // Output: 30

constVar = 40; 
console.log(constVar);// Error: Assignment to constant variable.
