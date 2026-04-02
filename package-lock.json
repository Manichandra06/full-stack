const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
        msg.style.color = "red";
        msg.textContent = "All fields are required";
        return;
    }

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            msg.style.color = "green";
            msg.textContent = "Login successful";

        } else {
            msg.style.color = "red";
            msg.textContent = data.message;
        }
    })
    .catch(err => {
        msg.style.color = "red";
        msg.textContent = "Server error";
        console.log(err);
    });
});