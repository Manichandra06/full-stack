<!DOCTYPE html>
<html>
<head>
    <title>Student Dashboard</title>
    <link rel="stylesheet" href="dashboard.css">
</head>
<body>

    <div class="container">
        <h2>Student Records Dashboard</h2>

        <div class="controls">
            <select id="deptFilter">
                <option value="all">All Departments</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="ECE">CIVIL</option>
                <option value="MECH">MECH</option>
            </select>

            <button onclick="sortByName()">Sort by Name</button>
            <button onclick="sortByDate()">Sort by DOB</button>
        </div>

        <table id="studentTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>

        <div id="countSection"></div>
    </div>

<script src="dashboard.js"></script>
</body>
</html>