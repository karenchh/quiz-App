
function loadQuizzes() {
//index javascript
const quizzes = [
    {
      title: 'Java',
      description: 'Cross-platform programming language',
      button: {
        text: 'Quiz',
        link: '../pages/quiz.html?id=quizn1'
      } // ?id=quiz-n1 query parameter to pass it to the destination page to know in the next page which quiz is chosen
    },
    {
    title: 'JavaScript',
    description: 'Interactive web scripting language',
    button: {
      text: 'Quiz',
      link: '../pages/quiz.html?id=quizn2'
      }
    },
    {
        title: 'Python',
        description: 'Easy, versatile coding language',
        button: {
          text: 'Quiz',
          link: '../pages/quiz.html?id=quizn3'
        }
    },
    {
        title: 'HTML',
        description: 'Web page structure language',
        button: {
          text: 'Quiz',
          link: '../pages/quiz.html?id=quizn4'
        }
    },
    {
        title: 'CSS',
        description: 'Styles and designs for web pages',
        button: {
          text: 'Quiz',
          link: '../pages/quiz.html?id=quizn5'
        }
    },
    {
        title: 'SQL',
        description: 'Database querying and management',
        button: {
          text: 'Quiz',
          link: '../pages/quiz.html?id=quizn6'
        }
    }
  ];
  
  const quizcontainer = document.getElementById("quizlist");
  localStorage.setItem('quizzes', JSON.stringify(quizzes));
  for (let i = 0; i < quizzes.length; i++) {
    const quiz = quizzes[i]; // save each quiz in quiz variable

    //Create a quizdev for each and assigning to it the class="quiz" and id="quiz-n(i+1)"
    const quizdiv = document.createElement('div');
    quizdiv.classList.add('quiz');
    quizdiv.id = `quizn${i + 1}`;

    //Create a quiztitle for each and retrieve the title from the localstorage then add it as a text inside the quiztitle div
    const quiztitle = document.createElement('div');
    quiztitle.textContent = quiz.title;

    //Create quizdescription paragraph for each and retrieve the description from the localstorage
    const quizdescription = document.createElement('p');
    quizdescription.textContent = quiz.description;

    // Create quiz button
    const quizbutton = document.createElement('a');
    quizbutton.href = quiz.button.link;
    const button = document.createElement('button');
    button.textContent = quiz.button.text;
    quizbutton.appendChild(button);

    quizdiv.appendChild(quiztitle);
    quizdiv.appendChild(quizdescription);
    quizdiv.appendChild(quizbutton);

    // Add quiz div to container
    quizcontainer.appendChild(quizdiv);

  }
}
document.addEventListener("DOMContentLoaded", loadQuizzes);


// Find the log-out button
const logoutBtn = document.getElementById("logoutBtn");

// Add click event listener for log out
logoutBtn.addEventListener("click", () => {
    // Remove the logged-in user from localStorage
    localStorage.removeItem("loggedinuser");

    // Redirect to the login page
    window.location.href = '../pages/authentication.html';  // Change this path to your login page
});
