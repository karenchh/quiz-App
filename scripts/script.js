

const adminuser = {
    "email" : "admin@quiz.com",
    "password" : "admin123"
}
const usersarray = [];
usersarray.push(adminuser)

localStorage.setItem("users",JSON.stringify(usersarray));

const loginForm = document.getElementById("form-login");
loginForm.addEventListener("submit", loginfunction);

function loginfunction(event){

    event.preventDefault(); // stop page reload
    const emailtext = document.getElementById("login-email");
    const passwordtext = document.getElementById("login-password");
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    //check for login admin
    if(email === "admin@quiz.com" && password === "admin123"){
        alert("Log in success");
        window.location.href = '../pages/dashboard.html'; // redirect to admin dashboard 
        return;
    }
    let userfound = false;  
    const users = JSON.parse(localStorage.getItem("users")) || [];//not found return empty object
    //loop over the string and check if the email matches the entered email then check the password
    for (let i=0; i <users.length ; i++) { 
        if (users[i].email === email){
            userfound = true;
            if (users[i].password === password){
                alert("Log in success");
                window.location.href = '../index.html'; 
            }
            else{
                alert("Invalid Password")
                passwordtext.value = "";
            }
        }
        else{
            alert("Invalid Email")
                emailtext.value = "";
                passwordtext.value = "";
        }
    }
}