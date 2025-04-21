// Initialize Admin User (only if not already there)
const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
const adminExists = existingUsers.some(u => u.email === "admin@quiz.com");

if (!adminExists) {
  const admin = {
    email: "admin@quiz.com",
    password: "admin123",
    name: "Admin",
    familyname: "User",
    scores: {}
  };
  existingUsers.push(admin);
  localStorage.setItem("users", JSON.stringify(existingUsers));
}

// Toggle between Login and Register Forms
function toggleForm(form) {
  if (form === 'register') {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
  } else {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
  }
}

// Login Handler
const loginForm = document.getElementById("form-login");
if (loginForm) {
  loginForm.addEventListener("submit", function loginfunction(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(user => user.email === email);

    if (!foundUser) {
      alert("Email not found");
      return;
    }

    if (foundUser.password !== password) {
      alert("Invalid password");
      return;
    }

    // Store logged in user
    localStorage.setItem("loggedinuser", JSON.stringify(foundUser));

    alert("Login successful!");

    // Admin redirect
    if (email === "admin@quiz.com") {
      window.location.href = '../pages/dashboard.html';
    } else {
      window.location.href = '../index.html';
    }
  });
}

//Register Handler
const registerForm = document.getElementById("form-register");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("register-name").value;
    const familyname = document.getElementById("register-familyname").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
      alert("This email is already registered!");
      return;
    }

    const newUser = {
      name,
      familyname,
      email,
      password,
      scores: {} // empty score record
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Auto-login the new user
    localStorage.setItem("loggedinuser", JSON.stringify(newUser));

    alert("Registration successful! Redirecting...");
    window.location.href = "../index.html"; // or any other homepage
  });
}
