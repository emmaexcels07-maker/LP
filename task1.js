const students = [
    { name: "Ayo", score: 85},
    { name: "Prisca", score: 92},
    { name: "John", score: 58},
    { name: "Mary", score: 73},
];

function getGrade(score) {
    if (score >= 80) return 'A';
    else if (score >= 70) return 'B';
    else if (score >= 60) return 'C';
    else return 'F';
}


console.log("Student Grades:")

students.forEach(student => {
    student.grade = getGrade(student.score);
    console.log(`${student.name} - Score: ${student.score}, Grade: ${student.grade}`);
});


const passed = students.filter(s => s.grade !== "F").length;
const failed = students.filter(s => s.grade === "F").length;
const average = students.reduce((sum, s) => sum + s.score, 0) / students.length;

console.log(`\nNumber of students who passed: ${passed}`);
console.log(`Number of students who failed: ${failed}`);
console.log(`Average score: ${average.toFixed(2)}`);

students.sort((a, b) => b.score - a.score);

console.log("\nSorted Students by Score (High to Low):");
students.forEach(student => {
  console.log(`${student.name} - Score: ${student.score} - Grade: ${student.grade}`);
});
