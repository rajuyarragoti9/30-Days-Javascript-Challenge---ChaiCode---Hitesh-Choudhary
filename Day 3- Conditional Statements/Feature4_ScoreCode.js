//Assign a grade based on a score using a switch case and log the grade.
let score = 72;
let grade;

switch (true) {
  case (score >= 90):
    grade = 'A';
    break;
  case (score >= 80):
    grade = 'B';
    break;
  case (score >= 70):
    grade = 'C';
    break;
  case (score >= 60):
    grade = 'D';
    break;
  default:
    grade = 'F';
}

console.log("Grade:", grade); 
// Output: Grade: C
