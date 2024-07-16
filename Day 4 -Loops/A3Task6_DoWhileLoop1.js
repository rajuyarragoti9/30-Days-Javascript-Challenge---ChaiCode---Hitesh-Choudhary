// Calculate the factorial of a number using a do-while loop.

let number = 5;
let factorial=1;
let i=number;
do{
    factorial*=i;
    i--;
}while(i>0);

console.log(`Factorial of ${number} is ${factorial}`);


//Output:Factorial of 5 is 120
