document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     LOGIN BACKEND
  ========================= */
  const loginForm = document.getElementById("form-login");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = loginForm.querySelector('[name="email"]').value;
      const password = loginForm.querySelector('[name="password"]').value;

      if (email === "test@test.com" && password === "123456") {
        alert("Login successful (mock backend)");
      } else {
        alert("Invalid credentials (mock backend)");
      }
    });
  }

  /* =========================
     REGISTER BACKEND
  ========================= */
  const registerForm = document.getElementById("form-register");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      clearErrors();

      let valid = true;

      const firstname = registerForm.querySelector('[name="firstname"]');
      const lastname = registerForm.querySelector('[name="lastname"]');
      const email = registerForm.querySelector('[name="email"]');
      const password = registerForm.querySelector('[name="password"]');
      const agree = registerForm.querySelector('[name="agree"]');

      if (firstname.value.trim() === "") {
        showError("error-firstname", "First name is required");
        valid = false;
      }

      if (lastname.value.trim() === "") {
        showError("error-lastname", "Last name is required");
        valid = false;
      }

      if (!email.value.includes("@")) {
        showError("error-email", "Invalid email address");
        valid = false;
      }

      if (password.value.length < 6) {
        showError("error-password", "Password must be at least 6 characters");
        valid = false;
      }

      if (!agree.checked) {
        alert("You must agree to the Privacy Policy");
        valid = false;
      }

      if (valid) {
        alert("Registration successful (mock backend)");
        registerForm.reset();
      }
    });
  }

  /* =========================
     FORGOT PASSWORD BACKEND
  ========================= */
  const forgottenForm = document.getElementById("form-forgotten");
  if (forgottenForm) {
    forgottenForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = forgottenForm.querySelector('[name="email"]').value;

      if (email.includes("@")) {
        alert("Password reset link sent (mock backend)");
      } else {
        showError("error-email", "Please enter a valid email");
      }
    });
  }

  /* =========================
     HELPERS
  ========================= */
  function showError(id, message) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = message;
      el.style.display = "block";
    }
  }

  function clearErrors() {
    document.querySelectorAll(".invalid-feedback").forEach(el => {
      el.textContent = "";
      el.style.display = "none";
    });
  }

});
