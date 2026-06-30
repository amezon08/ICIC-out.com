function showTab(type) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(t => t.classList.remove("active"));

    if (type === "user") {
        tabs[0].classList.add("active");
        document.getElementById("fieldLabel").innerText = "User ID";
        document.getElementById("loginField").placeholder = "Enter User ID";
        document.getElementById("helperText").innerText = "Please enter your User ID";
    } else if (type === "mobile") {
        tabs[1].classList.add("active");
        document.getElementById("fieldLabel").innerText = "Mobile No";
        document.getElementById("loginField").placeholder = "Enter Mobile Number";
        document.getElementById("helperText").innerText = "Please enter your registered mobile number";
    } else {
        tabs[2].classList.add("active");
        document.getElementById("fieldLabel").innerText = "QR Code";
        document.getElementById("loginField").placeholder = "Scan QR Code";
        document.getElementById("helperText").innerText = "QR login demo mode";
    }
}

function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

function login() {
    alert("Demo login clicked");
}