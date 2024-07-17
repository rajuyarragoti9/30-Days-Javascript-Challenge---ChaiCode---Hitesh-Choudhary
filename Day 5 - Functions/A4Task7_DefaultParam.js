//A function that takes two parameters and returns their product, with a default value for the second parameter.

function multiply(a,b=2)
{
    return a*b;
}

console.log(multiply(5));
console.log(multiply(5,4));


//Ouput
//10
//20