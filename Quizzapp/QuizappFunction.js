let selectedQuiz = [];
let current = 0;
let score = 0;

function startQuiz() {
  const category = document.getElementById("category").value;
  selectedQuiz = quizData[category];

  current = 0;
  score = 0;

  document.getElementById("quiz-selection").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  loadQuestion();

}

function loadQuestion() {
  const quiz = selectedQuiz[current];
  document.getElementById("question").textContent = quiz.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  quiz.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("feedback").style.display = "none";
  document.getElementById("feedback").textContent = "";
  document.getElementById("score").style.display = "none";
  document.getElementById("quitCategoryBtn").style.display = "none";
  document.getElementById("quitLoginBtn").style.display = "none";
}

function checkAnswer(selected) {
  const correctAnswer = selectedQuiz[current].answer;
  const buttons = document.querySelectorAll("#options button");

  let resultMessage = "";

  buttons.forEach(btn => {
    btn.disabled = true;

    if (btn.textContent === correctAnswer) {
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
    }

    if (btn.textContent === selected && selected !== correctAnswer) {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
    }
  });

  if (selected === correctAnswer) {
    score++;
    resultMessage = "✅ Correct Answer!";
  } else {
    resultMessage = "❌ Incorrect Answer!";
  }

  const feedback = document.getElementById("feedback");
  feedback.innerHTML = resultMessage;
  feedback.style.display = "block";
}

function nextQuestion() {
  if (current < selectedQuiz.length - 1) {
    current++;
    loadQuestion();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  document.getElementById("question").textContent = "Quiz Finished!";
  document.getElementById("options").innerHTML = `
    <button onclick="retakeQuiz()">Retake Quiz</button>
    <button onclick="returnToCategory()">Return to Category Selection</button>
  `;

  const scoreDiv = document.getElementById("score");
  scoreDiv.style.display = "block";
  scoreDiv.innerHTML = `
    <strong>Final Score: ${score}/${selectedQuiz.length}</strong><br>${message}
  `;

  document.getElementById("feedback").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("quitCategoryBtn").style.display = "none";
  document.getElementById("returnLoginBtn").style.display = "inline-block";
}


  let message = "";
  const percentage = (score / selectedQuiz.length) * 100;

  if (percentage === 100) {
    message = "🎉 Perfect score! You're a quiz master!";
  } else if (percentage >= 70) {
    message = "👏 Great job! You really know your stuff!";
  } else if (percentage >= 40) {
    message = "😊 Not bad! Keep practicing and you'll get there!";
  } else {
    message = "💪 Don't give up! Review and try again!";
  }
function retakeQuiz() {
  current = 0;
  score = 0;

  document.getElementById("nextBtn").style.display = "inline-block";
  document.getElementById("feedback").style.display = "none";
  document.getElementById("feedback").textContent = "";
  document.getElementById("score").style.display = "none";
  document.getElementById("score").textContent = "";

  loadQuestion();
}

function returnToCategory() {
  document.getElementById("quiz-selection").classList.remove("hidden");
  document.getElementById("quiz-box").classList.add("hidden");

  document.getElementById("question").textContent = "";
  document.getElementById("options").innerHTML = "";
  document.getElementById("score").textContent = "";
  document.getElementById("score").style.display = "none";
  document.getElementById("feedback").style.display = "none";
  document.getElementById("feedback").textContent = "";

  document.getElementById("nextBtn").style.display = "inline-block";

  selectedQuiz = [];
  current = 0;
  score = 0;
}

function quitQuiz(toLogin = false) {
  const confirmQuit = confirm("Are you sure you want to quit the quiz?");
  if (confirmQuit) {
    if (toLogin) {
      returnToLogin();
    } else {
      returnToCategory();
    }
  }
}

  function returnToLogin() {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("quiz-selection").classList.add("hidden");
    document.getElementById("register-box").classList.add("hidden");
  
    document.getElementById("login-box").classList.remove("hidden");
  
    document.getElementById("question").textContent = "";
    document.getElementById("options").innerHTML = "";
    document.getElementById("feedback").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("nextBtn").style.display = "inline-block";
  
    selectedQuiz = [];
    current = 0;
    score = 0;
  }
  

