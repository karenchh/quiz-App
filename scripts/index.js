
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
    
    }