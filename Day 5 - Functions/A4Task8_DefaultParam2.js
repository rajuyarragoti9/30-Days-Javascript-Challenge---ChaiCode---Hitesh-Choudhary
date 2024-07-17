//A function that takes a person's name and age and returns a greeting message, with a default value for the age.

function greet(name,age=30) {
    return `Hello , My name is ${name} and I am ${age} years old`
}

console.log(greet('Raju'));
console.log(greet('Raju',23));


//Output:
/*
Hello , My name is Raju and I am 30 years old
Hello , My name is Raju and I am 23 years old
*/