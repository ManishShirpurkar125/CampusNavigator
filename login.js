// FRONT-END LOGIN FORM DEMO — no credentials are stored or sent anywhere.
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const loginMessage = document.getElementById("loginMessage");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const showPassword = passwordInput.type === "password";
  passwordInput.type = showPassword ? "text" : "password";
  togglePassword.textContent = showPassword ? "Hide" : "Show";
  togglePassword.setAttribute("aria-label", showPassword ? "Hide password" : "Show password");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  emailError.textContent = "";
  passwordError.textContent = "";
  loginMessage.textContent = "";

  const email = emailInput.value.trim();
  const password = passwordInput.value;
  let valid = true;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (valid) {
    loginMessage.textContent = "Form looks valid! Demo only — connect a secure backend for real login.";
  }
});
