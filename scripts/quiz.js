const user = JSON.parse(localStorage.getItem("loggedinuser"));

if (!user) {
  window.location.href = "../pages/authentication.html"; // redirect if not logged in
}
//console.log(user);