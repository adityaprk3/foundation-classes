// Toggle login/logout behavior
function toggleLogin() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        // Perform logout
        localStorage.removeItem("isLoggedIn");
        alert("You have been logged out.");
        updateLoginButton(); // Change button text to "Login"
        location.reload();
    } else {
        // Show login popup
        document.getElementById("loginModal").style.display = "flex";
    }
}

// Close login popup modal
function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

// Handle login form submission
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const validUser = "admin";
    const validPass = "1234";

    if (username === validUser && password === validPass) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
        closeLogin();
        updateLoginButton();
        location.reload();
    } else {
        alert("Invalid username or password. Try admin / 1234");
    }
}

// Update login button text based on login state
function updateLoginButton() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const loginBtn = document.querySelector(".login-btn");
    if (loginBtn) {
        loginBtn.textContent = isLoggedIn === "true" ? "Logout" : "Login";
    }
}

// DOM Ready
document.addEventListener("DOMContentLoaded", function () {
    updateLoginButton(); // Set correct button text on load
});
