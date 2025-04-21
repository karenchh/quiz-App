const user = JSON.parse(localStorage.getItem("loggedinuser"));

if (!user) {
  window.location.href = "../pages/authentication.html"; // redirect if not logged in
}
//console.log(user);
const quiznumber = new URLSearchParams(window.location.search); // to bring it from the url
const quizid = quiznumber.get("id");
console.log(quizid)