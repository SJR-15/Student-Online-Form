// ======================================
// GET ELEMENTS FROM HTML
// ======================================

const form = document.getElementById("registrationForm");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");

const interests = document.getElementById("interests");

const characterCount = document.getElementById("characterCount");

const successMessage = document.getElementById("successMessage");

const registrationNumber = document.getElementById("registrationNumber");

const printButton = document.getElementById("printButton");

// ======================================
// SHOW / HIDE PASSWORD
// ======================================

togglePassword.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";

    togglePassword.textContent = "Hide";
  } else {
    password.type = "password";

    togglePassword.textContent = "Show";
  }
});

// ======================================
// CHARACTER COUNTER
// ======================================

interests.addEventListener("input", function () {
  characterCount.textContent = interests.value.length;
});

// ======================================
// FORM SUBMISSION
// ======================================

form.addEventListener("submit", function (event) {
  // Stop normal form submission
  event.preventDefault();

  // Remove previous error styles
  const inputs = form.querySelectorAll("input, select, textarea");

  inputs.forEach(function (input) {
    input.classList.remove("error");
  });

  // ==================================
  // CHECK PASSWORD LENGTH
  // ==================================

  if (password.value.length < 8) {
    alert("Password must contain at least 8 characters.");

    password.classList.add("error");

    password.focus();

    return;
  }

  // ==================================
  // CHECK PASSWORD FOR NUMBER
  // ==================================

  const hasNumber = /\d/.test(password.value);

  if (!hasNumber) {
    alert("Password must contain at least one number.");

    password.classList.add("error");

    password.focus();

    return;
  }

  // ==================================
  // CHECK PASSWORD MATCH
  // ==================================

  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match.");

    confirmPassword.classList.add("error");

    confirmPassword.focus();

    return;
  }

  // ==================================
  // CHECK COURSE SELECTION
  // ==================================

  const selectedCourses = document.querySelectorAll(
    'input[name="courses"]:checked',
  );

  if (selectedCourses.length === 0) {
    alert("Please select at least one course.");

    return;
  }

  // ==================================
  // GENERATE REGISTRATION NUMBER
  // ==================================

  const randomNumber = Math.floor(100000 + Math.random() * 900000);

  const year = new Date().getFullYear();

  const regNumber = "STU-" + year + "-" + randomNumber;

  registrationNumber.textContent = regNumber;

  // ==================================
  // HIDE FORM
  // ==================================

  form.style.display = "none";

  // ==================================
  // SHOW SUCCESS MESSAGE
  // ==================================

  successMessage.classList.remove("hidden");

  // Scroll to success message
  successMessage.scrollIntoView({
    behavior: "smooth",
  });
});

// ======================================
// PRINT REGISTRATION
// ======================================

printButton.addEventListener("click", function () {
  window.print();
});
