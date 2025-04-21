const loggedInUser = JSON.parse(localStorage.getItem("loggedinuser"));
if (!loggedInUser || loggedInUser.email !== "admin@quiz.com") {
  alert("Access denied. Admins only.");
  window.location.href = "../pages/authentication.html";
}
const users = JSON.parse(localStorage.getItem("users")) || [];
const tableBody = document.getElementById("users-tbody");


for (let i = 0; i < users.length; i++) {
    const user = users[i];




}