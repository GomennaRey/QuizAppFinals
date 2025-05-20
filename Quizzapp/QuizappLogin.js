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
    
  
    const found = credentials.find(cred => cred.username === user && cred.password === pass);
  
    if (found) {
      document.getElementById("login-box").classList.add("hidden");
      document.getElementById("quiz-selection").classList.remove("hidden");
      alert("WELCOME TO THE QUIZ APP!");
      loadQuestion();
    } else {
      error.textContent = "Invalid login.";
    }
  }
  
  function showRegister() {
    document.getElementById("login-box").classList.add("hidden");
    document.getElementById("register-box").classList.remove("hidden");
    document.getElementById("error").textContent = "";
    document.getElementById("reg-error").textContent = "";
  }

  function showLogin() {
    document.getElementById("register-box").classList.add("hidden");
    document.getElementById("login-box").classList.remove("hidden");
    document.getElementById("error").textContent = "";
    document.getElementById("reg-error").textContent = "";
  }

  function register() {
    const user = document.getElementById("reg-username").value.trim();
    const pass = document.getElementById("reg-password").value.trim();
    const regError = document.getElementById("reg-error");

    if (!user || !pass) {
      regError.textContent = "Please fill in all fields.";
      return;
    }

    const exists = credentials.some(cred => cred.username === user);
    if (exists) {
      regError.textContent = "Username already exists.";
      return;
    }

    credentials.push({ username: user, password: pass });
    alert("Registration successful! You can now log in.");
    showLogin();
  }
