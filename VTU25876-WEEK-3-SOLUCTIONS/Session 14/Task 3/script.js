// Complex object
const student = {
    name: "A.dhanunjaya",
    rollNo: 23,
    course: "CSE",
    marks: {
        math: 100,
        science: 100
    }
};

// Array
const subjects = ["Math", "Science", "English"];

// Object destructuring (no dot notation)
const { name, course, marks: { math } } = student;

// Array destructuring (no index numbers)
const [firstSubject, secondSubject] = subjects;

// Display result
document.getElementById("output").textContent =
`Name: ${name}
Course: ${course}
Math Marks: ${math}
First Subject: ${firstSubject}
Second Subject: ${secondSubject}`;
