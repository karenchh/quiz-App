const admin = {
    "email":"admin@quiz.com",
    "password" : "admin123"
}
const users =[];
users.push(admin);
localStorage.setItem("users", JSON.stringify(users));
// JavaScript to toggle between the Login and Register forms
function toggleForm(form) {
    if (form === 'register') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
    } else if (form === 'login') {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
    }
}

// Handling the login form submission
const loginForm = document.getElementById("form-login");
loginForm.addEventListener("submit", loginfunction);

function loginfunction(event){
    event.preventDefault();  // stop page reload
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Check for login as admin
    if(email === "admin@quiz.com" && password === "admin123"){
        alert("Log in success");
        window.location.href = '../pages/dashboard.html'; // redirect to admin dashboard
        return;
    }

    let userFound = false;
    const users = JSON.parse(localStorage.getItem("users")) || [];  // fetch users from localStorage

    // Loop over users and check credentials
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            userFound = true;
            if (users[i].password === password) {
                alert("Log in success");
                window.location.href = '../index.html'; // redirect to home page
                return;
            } else {
                alert("Invalid password");
            }
        }
    }
    if (!userFound) {
        alert("Email not found");
    }
}

// Handling the register form submission
const registerForm = document.getElementById('form-register');
if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form from submitting

    const name = document.getElementById('register-name').value;
    const familyname = document.getElementById('register-familyname').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Check if email already exists
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(user => user.email === email)) {
      alert('This email is already registered!');
      return;
    }

    const newUser = { name, familyname, email, password, scores: [] };

    // Save the new user in localStorage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! You can now log in.');
    toggleForm('login');  // Switch to login form after registration
  });
}

// ===============================================================================

//index javascript
const quizzes = [
    {
      title: 'Java',
      description: 'Cross-platform programming language',
      button: {
        text: 'Quiz',
        link: '../pages/quiz.html?id=quiz-n1'
      } // ?id=quiz-n1 query parameter to pass it to the destination page to know in the next page which quiz is chosen
    },
    {
    title: 'JavaScript',
    description: 'Interactive web scripting language',
    button: {
      text: 'Quiz',
      link: '../pages/quiz.html?id=quiz-n2'
      }
    },
    {
        title: 'Python',
        description: 'Easy, versatile coding language',
        button: {
          text: 'Quiz',
          link: '../pages/quiz.html?id=quiz-n3'
        }
    },
    {
        title: 'HTML',
        description: 'Web page structure language',
        button: {
          text: 'Quiz',
          link: '../pages/quiz.html?id=quiz-n4'
        }
    },
    {
        title: 'CSS',
        description: 'Styles and designs for web pages',
        button: {
          text: 'Quiz',
          link: '../pages/quiz.html?id=quiz-n5'
        }
    },
    {
        title: 'SQL',
        description: 'Database querying and management',
        button: {
          text: 'Quiz',
          link: '../pages/quiz.html?id=quiz-n6'
        }
    }
  ];
