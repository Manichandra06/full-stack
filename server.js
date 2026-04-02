const result = document.getElementById("msg");

function validateForm() {
    // Get values INSIDE function
    const username = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const DOB = document.getElementById("DOB").value;
    const phNo = document.getElementById("phNo").value.trim();
    const dept = document.getElementById("dept").value.trim();
    const password = document.getElementById("password").value;
    const cnfpassword = document.getElementById("cnfpassword").value;

    if (!username || !email || !phNo || !dept || !password || !cnfpassword || !DOB) {
        result.textContent = "All fields are required";
        result.style.color = "red";
        return false;
    }

    if (password !== cnfpassword) {
        result.textContent = "Password and Confirm Password do not match";
        result.style.color = "red";
        return false;
    }
    if(phNo.length !== 10 || !/^\d+$/.test(phNo)){
        result.textContent = "Phone number must be 10 digits";
        result.style.color = "red";
        return false;
    }
    return {
        username,
        email,
        dept,
        phNo,
        DOB,
        password
    };
}

function handleSubmit() {
    const formData = validateForm();
    console.log(formData);
    if (formData) {
        fetch('http://localhost:3000/addData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                result.style.color = "green";
                result.textContent = "Registration successful";
            } else {
                result.style.color = "red";
                result.textContent = "Registration failed: " + data.message;
            }
        })
        .catch(error => {
            result.style.color = "red";
            result.textContent = "Error: " + error.message;
        });
    }
}

function handleReset() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("DOB").value = "";
    document.getElementById("phNo").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("password").value = "";
    document.getElementById("cnfpassword").value = "";
    result.textContent = "";
}