//A higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function compose(fn1,fn2,value)
{
    return fn2(fn1(value));
}

const double = x => x*2;
const square = x => x*x;

console.log(compose(double,square,5));

//Output:100