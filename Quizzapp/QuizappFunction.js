let selectedQuiz = [];
let current = 0;
let score = 0;

function startQuiz() {
  const category = document.getElementById("category").value;
  selectedQuiz = quizData[category];

  document.getElementById("quiz-selection").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");

  current = 0;
  score = 0;
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

  document.getElementById("score").textContent = "";
}

function checkAnswer(selected) {
  if (selected === selectedQuiz[current].answer) {
    score++;
  }

  const buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => btn.disabled = true);

  document.getElementById("score").textContent = `Score: ${score}/${selectedQuiz.length}`;
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
  document.getElementById("options").innerHTML =`
  <button onclick="retakeQuiz()">Retake Quiz</button>
  <button onclick="returnToCategory()">Return to Category Selection</button>`;
  

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

  document.getElementById("score").innerHTML = `
    <strong>Final Score: ${score}/${selectedQuiz.length}</strong><br>${message}
  `;
  document.getElementById("nextBtn").style.display = "none";
}
function retakeQuiz(){
  current = 0;
  score = 0;

  document.getElementById("nextBtn").style.display = "inline-block";
  loadQuestion();
}
function returnToCategory() {
  document.getElementById("quiz-selection").classList.remove("hidden");
  document.getElementById("quiz-box").classList.add("hidden");

  document.getElementById("question").textContent = "";
  document.getElementById("options").innerHTML = "";
  document.getElementById("score").textContent = "";

  document.getElementById("nextBtn").style.display = "inline-block";

  selectedQuiz = [];
  current = 0;
  score = 0;
}
