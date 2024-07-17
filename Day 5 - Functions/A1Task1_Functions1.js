// Function declarations define reusable blocks of code that can be called anywhere in the script after they are declared.
//A function that determines if a number is even or odd.
function isEvenOrOdd(number) {
    if(number%2 == 0)
    {
        console.log(`${number} is Even`);
    }
    else{
        console.log(`${number} is Odd`);
    }
}

isEvenOrOdd(10);
isEvenOrOdd(7);
isEvenOrOdd(2);
isEvenOrOdd(21);

//Output:
//10 is Even
//7 is Odd
//2 is Even
//21 is Odd
