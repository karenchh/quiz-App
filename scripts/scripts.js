const adminuser = {
    "email" : "admin@quiz.com",
    "password" : "admin123"
}

localStorage.setItem("users",JSON.stringify(adminuser));
localStorage.removeItem("admin")

const loginForm = document.getElementById("form-login");
loginForm.addEventListener("submit", loginfunction);

function loginfunction(event){

    event.preventDefault(); // stop page reload
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    //check for login admin
    if(email === "admin@quiz.com" && password === "admin123"){
        window.location.href = '../pages/dashboard.html'; // redirect to admin dashboard 
        return;
    }

    const users = localStorage(JSON.parse("users"));
    console.log(users)
}