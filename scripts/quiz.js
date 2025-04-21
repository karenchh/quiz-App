const user = JSON.parse(localStorage.getItem("loggedinuser"));

if (!user) {
  window.location.href = "../pages/authentication.html"; // redirect if not logged in
}
//console.log(user);
const quiz1 = [
  {
    question: "What is Java mainly used for?",
    options: ["Machine Learning", "Web Styling", "Enterprise Applications"],
    correctAnswer: "Enterprise Applications"
  },
  {
    question: "Java code runs on the ___?",
    options: ["CPU", "JVM", "Python Interpreter"],
    correctAnswer: "JVM"
  },
  {
    question: "What is the file extension for Java source files?",
    options: [".js", ".java", ".py"],
    correctAnswer: ".java"
  }
];
localStorage.setItem("quizn1", JSON.stringify(quiz1));

const quiz2 = [
  {
    question: "What is JavaScript used for?",
    options: ["Data storage", "Web Interactivity", "Database management"],
    correctAnswer: "Web Interactivity"
  },
  {
    question: "Which keyword is used to declare a variable?",
    options: ["var", "define", "int"],
    correctAnswer: "var"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google"],
    correctAnswer: "Netscape"
  }
];
localStorage.setItem("quizn2", JSON.stringify(quiz2));

const quiz3 = [
  {
    question: "What is the correct file extension for Python files?",
    options: [".py", ".pt", ".pyt"],
    correctAnswer: ".py"
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "fun"],
    correctAnswer: "def"
  },
  {
    question: "Which data structure is ordered and changeable?",
    options: ["Tuple", "Set", "List"],
    correctAnswer: "List"
  }
];
localStorage.setItem("quizn3", JSON.stringify(quiz3));

const quiz4 = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HighText Markdown Language", "Home Tool Markup Language"],
    correctAnswer: "HyperText Markup Language"
  },
  {
    question: "What tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>"],
    correctAnswer: "<a>"
  },
  {
    question: "What tag is used to create a numbered list?",
    options: ["<ul>", "<ol>", "<li>"],
    correctAnswer: "<ol>"
  }
];
localStorage.setItem("quizn4", JSON.stringify(quiz4));

const quiz5 = [
  {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Syntax"],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question: "Which CSS property changes the background color?",
    options: ["color", "background", "background-color"],
    correctAnswer: "background-color"
  },
  {
    question: "Which symbol is used to select a class in CSS?",
    options: [".", "#", "@"],
    correctAnswer: "."
  }
];
localStorage.setItem("quizn5", JSON.stringify(quiz5));

const quiz6 = [
  {
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Server Query Language"],
    correctAnswer: "Structured Query Language"
  },
  {
    question: "Which command is used to get data from a table?",
    options: ["FETCH", "SELECT", "GET"],
    correctAnswer: "SELECT"
  },
  {
    question: "Which clause is used to filter results?",
    options: ["ORDER", "WHERE", "LIMIT"],
    correctAnswer: "WHERE"
  }
];
localStorage.setItem("quizn6", JSON.stringify(quiz6));

const quiznumber = new URLSearchParams(window.location.search); // to bring it from the url
const quizid = quiznumber.get("id");
//console.log(quizid);
const quizdata = JSON.parse(localStorage.getItem(quizid));
//const quiznum1= JSON.parse(localStorage.getItem("quizn1"));
//console.log(quiznum1);
const quizContainer = document.getElementById("quizcontainer");
const submitBtn = document.getElementById("submitBtn"); // 🔧 added reference to button
const scoreResult = document.getElementById("score-result"); // 🔧 added reference to result output

if (!quizdata) {
  document.getElementById("quizcontainer").textContent = "Quiz not found! You must log in first";
  document.getElementById("submitBtn").style.display = "none";
} else {
  for (let i = 0; i < quizdata.length; i++) { // to pass on the selected quiz list
    const q = quizdata[i]; // each object

    const questiondiv = document.createElement("div"); // create a div for the questions
    questiondiv.innerHTML = `<p>${i + 1}. ${q.question}</p>`; // formated string retrieving the question

    for (let optionindex = 0; optionindex < q.options.length; optionindex++) { // for loop for the options array
      const opt = q.options[optionindex];
      const optionHTML = `
        <label>
        <input type="radio" name="q${i}" value="${opt}" />
        ${opt}
        </label><br/>
      `;
      questiondiv.innerHTML += optionHTML;
    }

    quizContainer.appendChild(questiondiv);
  }

  submitBtn.addEventListener("click", () => {
    let score = 0;

    // check if the answer is true
    for (let i = 0; i < quizdata.length; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected && selected.value === quizdata[i].correctAnswer) {
        score++;
      }
    }

    // type the score for the user 
    scoreResult.textContent = `You scored ${score} out of ${quizdata.length}`;

    // save score for the user (user + quiz)
    const user = JSON.parse(localStorage.getItem("loggedinuser"));
    if (user) {
      if (!user.scores) {
        user.scores = {}; // initialize scores object if not there
      }

      user.scores[quizid] = score;

      // Save updated user to localStorage
      localStorage.setItem("loggedinuser", JSON.stringify(user));

      // Optional: Also update full user list, if you're storing all users
      const allUsers = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = allUsers.map(u => u.email === user.email ? user : u);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    submitBtn.disabled = true; // prevent submitting again
  });
}
