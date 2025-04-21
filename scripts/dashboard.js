const loggedInUser = JSON.parse(localStorage.getItem("loggedinuser"));
if (!loggedInUser || loggedInUser.email !== "admin@quiz.com") {
  alert("Access denied. Admins only.");
  window.location.href = "../pages/authentication.html";
}
const users = JSON.parse(localStorage.getItem("users")) || [];
const tableBody = document.getElementById("users-tbody");


for (let i = 0; i < users.length; i++) {
    const user = users[i];

    if (user.email === "admin@quiz.com") continue;//to skip the admin
    const row = document.createElement("tr");//creating each row in the body
    const indexCell = document.createElement("td"); // Creating data inside the table
    indexCell.textContent = i;

    const nameCell = document.createElement("td");
    nameCell.textContent = `${user.name} ${user.familyname}`;

    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;

    const scoresCell = document.createElement("td");

    const scores = user.scores || {};
    if (Object.keys(scores).length === 0) { //since scores is an object
      scoresCell.innerHTML = "No quizzes attempted";
    } else {
      let scoresText = "";
      for (let quizid in scores) {
        scoresText += `${quizid} => ${scores[quizid]}<br>`;
      }
      scoresCell.innerHTML = scoresText;
    }
  
    row.appendChild(indexCell);
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(scoresCell);
  
    tableBody.appendChild(row);
}