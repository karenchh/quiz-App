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
const quiznumber = new URLSearchParams(window.location.search); // to bring it from the url
const quizid = quiznumber.get("id");
console.log(quizid)

