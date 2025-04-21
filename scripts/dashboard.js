const loggedInUser = JSON.parse(localStorage.getItem("loggedinuser"));
if (!loggedInUser || loggedInUser.email !== "admin@quiz.com") {
  alert("Access denied. Admins only.");
  window.location.href = "../pages/authentication.html";
}
const users = JSON.parse(localStorage.getItem("users")) || [];
