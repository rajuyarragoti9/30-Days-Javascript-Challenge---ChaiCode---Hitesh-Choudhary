//Determine the day of the week based on a number (1-7) using a switch case and log the day name.
let dayNumber = 5;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day number";
}

console.log(dayName); 

// Output: Thursday
