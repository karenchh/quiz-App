
const loginForm = document.getElementById("form-login");
loginForm.addEventListener("submit", loginfunction);

function loginfunction(event){

    event.preventDefault(); // stop page reload
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");

}