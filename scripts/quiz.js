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
  

const quiznumber = new URLSearchParams(window.location.search); // to bring it from the url
const quizid = quiznumber.get("id");
//console.log(quizid);

