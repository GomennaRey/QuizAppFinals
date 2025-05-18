const credentials = [
  { username: "johnrey", password: "1111" },
  { username: "alyssa", password: "2222" },
  { username: "gelo", password: "3333" },
  { username: "andrew", password: "4444" }

];

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");
  alert("Welcome To Our Quiz")

  const found = credentials.find(cred => cred.username === user && cred.password === pass);

  if (found) {
    document.getElementById("login-box").classList.add("hidden");
    document.getElementById("quiz-selection").classList.remove("hidden");
    loadQuestion();
  } else {
    error.textContent = "Invalid login.";
  }
}
