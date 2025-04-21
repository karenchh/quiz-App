
//index javascript
const quizzes = [
    {
      title: 'Java',
      description: 'Cross-platform programming language',
      button: {
        text: 'Quiz',
        link: '../pages/quiz.html?id=quiz-n1'
      } // ?id=quiz-n1 query parameter to pass it to the destination page to know in the next page which quiz is chosen
    },
    {
    title: 'JavaScript',
    description: 'Interactive web scripting language',
    button: {
      text: 'Quiz',
      link: '../pages/quiz.html?id=quiz-n2'
      }
    },
    {
        title: 'Python',
        description: 'Easy, versatile coding language',
        button: {
          text: 'Quiz',
          link: '../pages/quiz.html?id=quiz-n3'
        }
    },
    {
        title: 'HTML',
        description: 'Web page structure language',
        button: {
          text: 'Quiz',
          link: '../pages/quiz.html?id=quiz-n4'
        }
    },
    {
        title: 'CSS',
        description: 'Styles and designs for web pages',
        button: {
          text: 'Quiz',
          link: '../pages/quiz.html?id=quiz-n5'
        }
    },
    {
        title: 'SQL',
        description: 'Database querying and management',
        button: {
          text: 'Quiz',
          link: '../pages/quiz.html?id=quiz-n6'
        }
    }
  ];

  localStorage.setItem('quizzes', JSON.stringify(quizzes));
  for (let i = 0; i < quizzes.length; i++) {
    const quiz = quizzes[i]; // save each quiz in quiz variable

    //Create a quizdev for each and assigning to it the class="quiz" and id="quiz-n(i+1)"
    const quizdiv = document.createElement('div');
    quizdiv.classList.add('quiz');
    quizdiv.id = `quiz-n${i + 1}`;

    //Create a quiztitle for each and retrieve the title from the localstorage then add it as a text inside the quiztitle div
    const quiztitle = document.createElement('div');
    quiztitle.textContent = quiz.title;

    //Create quizdescription paragraph for each and retrieve the description from the localstorage
    const quizdescription = document.createElement('p');
    quizdescription.textContent = quiz.description;
    }