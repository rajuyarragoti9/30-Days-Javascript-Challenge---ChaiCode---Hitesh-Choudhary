//A higher-order function that takes a function and a number and calls the function that many times.

function loop(fn,times)
{
    for(let i=0;i<times;i++)
    {
        fn();
    }
}
const sayHello=()=>console.log('Hello');
loop(sayHello,3);

//Output
/*
Hello
Hello
Hello
*/