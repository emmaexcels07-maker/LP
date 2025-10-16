// function takeAttendance(attendance) {
//     for (let i = 0; i < attendance.length; i++) {
//         let input = prompt(`Roll No. ${i + 1}: Enter 'P' for Present or 'A' for Absent`).toUpperCase();
//         while (input !== 'P' && input !== 'A') {
//             input = prompt(`Invalid input. Roll No. ${i + 1}: Enter 'P' or 'A'`).toUpperCase();
//         }
//         attendance[i] = input;
//     }
// }

// function displayAttendance(attendance) {
//     for (let i=0; i<attendance.length; i++) {
//         console.log(`Roll No. ${i+1}: ${attendance[i] === 'P' ? 'Present' : 'Absent'}`)
//     }
// }

// function firstPresent(attendance) {
//     for (let i=0; i<attendance.length; i++){
//         if (attendance[i] === 'p') {
//             console.log(`The first student present is Roll No. ${i+1}`);
//             return;
//         }
//     }
//     console.log("No student is present today")
// } 



// const attendance = new Array(50).fill('A');
// takeAttendance(attendance);
// displayAttendance(attendance);
// firstPresent(attendance);


// Attendance Management System for 50 Students

// Step 1: Create an array of students
let students = [];
for (let i = 1; i <= 50; i++) {
  students.push({ id: i, name: `Student ${i}`, present: false });
}

// Step 2: Function to mark attendance
function markAttendance(studentId, status) {
  if (studentId < 1 || studentId > 50) {
    console.log("Invalid student ID!");
    return;
  }
  students[studentId - 1].present = status;
  console.log(`${students[studentId - 1].name} marked as ${status ? "Present" : "Absent"}.`);
}

// Step 3: Function to display all attendance records
function showAttendance() {
  console.log("\nAttendance Record:");
  for (let student of students) {
    console.log(`${student.name}: ${student.present ? "Present" : "Absent"}`);
  }
}

// Step 4: Function to calculate total present and absent students
function attendanceSummary() {
  let presentCount = 0;
  let absentCount = 0;

  for (let student of students) {
    if (student.present) {
      presentCount++;
    } else {
      absentCount++;
    }
  }

  console.log(`\nSummary:`);
  console.log(`Total Students: ${students.length}`);
  console.log(`Present: ${presentCount}`);
  console.log(`Absent: ${absentCount}`);
}

// Example Usage
markAttendance(1, true);
markAttendance(2, true);
markAttendance(3, false);
markAttendance(4, true);

showAttendance();
attendanceSummary();