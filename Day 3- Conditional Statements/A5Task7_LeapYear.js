//Check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result.
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + "  is a leap year");
} else {
  console.log(year + " is a not a leap year");
}

//Output:2024 is a leap year
