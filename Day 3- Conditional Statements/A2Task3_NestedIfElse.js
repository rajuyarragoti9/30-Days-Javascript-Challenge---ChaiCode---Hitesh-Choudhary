//Find the largest of three numbers using nested if-else statements.
let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 >= num2 && num1 >= num3) {
  console.log("Largest Number :", num1);
} else if (num2 >= num1 && num2 >= num3) {
  console.log("Largest Number:", num2);
} else {
  console.log("Largest Number", num3);
}

//Output: Largest Number : 30
