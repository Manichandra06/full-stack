const tableBody = document.querySelector("#studentTable tbody");
const deptFilter = document.getElementById("deptFilter");
const countSection = document.getElementById("countSection");

function renderTable(data) {
    tableBody.innerHTML = "";

    data.forEach(student => {
        const row = `
            <tr>
                <td>${student.username}</td>
                <td>${student.email}</td>
                <td>${student.dept}</td>
                <td>${student.DOB}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function loadStudents() {
    fetch('http://localhost:3000/students')
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                renderTable(data.data);
            }
        });
}

function sortByName() {
    fetch('http://localhost:3000/students/sort/username')
        .then(res => res.json())
        .then(data => {
            renderTable(data.data);
        });
}

function sortByDate() {
    fetch('http://localhost:3000/students/sort/dob')
        .then(res => res.json())
        .then(data => {
            renderTable(data.data);
        });
}

deptFilter.addEventListener("change", () => {
    const dept = deptFilter.value;

    if (dept === "all") {
        loadStudents();
        return;
    }

    fetch(`http://localhost:3000/students/filter/${dept}`)
        .then(res => res.json())
        .then(data => {
            renderTable(data.data);
        });
});

function loadCount() {
    fetch('http://localhost:3000/students/count')
        .then(res => res.json())
        .then(data => {
            let result = "Student Count per Department:<br>";
            data.data.forEach(item => {
                result += `${item.dept}: ${item.total} <br>`;
            });
            countSection.innerHTML = result;
        });
}

loadStudents();
loadCount();