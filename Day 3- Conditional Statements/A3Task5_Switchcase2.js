// Assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade.
let score = 85;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}
console.log("Grade :", grade);

//output: Grade : B
