const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    let isValid = true;

    if (!username.value.trim()) {
      showFieldError(username, "Username is required");
      isValid = false;
    } else {
      hideFieldError(username);
    }

    if (!password.value.trim()) {
      showFieldError(password, "Password is required");
      isValid = false;
    } else if (password.value.length < 6) {
      showFieldError(password, "Password must be at least 6 characters");
      isValid = false;
    } else {
      hideFieldError(password);
    }

    if (isValid) {
      alert("Login successful! Redirecting to home page...");
      window.location.href = "home.html";
    }
  });
}

const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    let isValid = true;

    if (!fullname.value.trim()) {
      showFieldError(fullname, "Full name is required");
      isValid = false;
    } else {
      hideFieldError(fullname);
    }

    if (!username.value.trim()) {
      showFieldError(username, "Username is required");
      isValid = false;
    } else if (username.value.length < 3) {
      showFieldError(username, "Username must be at least 3 characters");
      isValid = false;
    } else {
      hideFieldError(username);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      showFieldError(email, "Email is required");
      isValid = false;
    } else if (!emailRegex.test(email.value)) {
      showFieldError(email, "Please enter a valid email");
      isValid = false;
    } else {
      hideFieldError(email);
    }

    if (phone.value.trim()) {
      const phoneRegex = /^[0-9]{10,11}$/;
      if (!phoneRegex.test(phone.value.replace(/[\s-]/g, ""))) {
        showFieldError(phone, "Please enter a valid phone number");
        isValid = false;
      } else {
        hideFieldError(phone);
      }
    }

    if (!password.value.trim()) {
      showFieldError(password, "Password is required");
      isValid = false;
    } else if (password.value.length < 6) {
      showFieldError(password, "Password must be at least 6 characters");
      isValid = false;
    } else {
      hideFieldError(password);
    }

    if (!confirmPassword.value.trim()) {
      showFieldError(confirmPassword, "Please confirm your password");
      isValid = false;
    } else if (password.value !== confirmPassword.value) {
      showFieldError(confirmPassword, "Passwords do not match");
      isValid = false;
    } else {
      hideFieldError(confirmPassword);
    }

    if (isValid) {
      alert("Registration successful! Redirecting to login page...");
      window.location.href = "login.html";
    }
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    let isValid = true;

    if (!name.value.trim()) {
      showFieldError(name, "Name is required");
      isValid = false;
    } else {
      hideFieldError(name);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      showFieldError(email, "Email is required");
      isValid = false;
    } else if (!emailRegex.test(email.value)) {
      showFieldError(email, "Please enter a valid email");
      isValid = false;
    } else {
      hideFieldError(email);
    }

    if (!subject.value.trim()) {
      showFieldError(subject, "Subject is required");
      isValid = false;
    } else {
      hideFieldError(subject);
    }

    if (!message.value.trim()) {
      showFieldError(message, "Message is required");
      isValid = false;
    } else if (message.value.trim().length < 10) {
      showFieldError(message, "Message must be at least 10 characters");
      isValid = false;
    } else {
      hideFieldError(message);
    }

    if (isValid) {
      alert("Thank you! Your message has been sent successfully.");
      contactForm.reset();
    }
  });
}

function showFieldError(input, message) {
  input.classList.add("error");

  const existingError = input.parentNode.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  const error = document.createElement("span");
  error.className = "error-message";
  error.textContent = message;
  input.parentNode.appendChild(error);
}

function hideFieldError(input) {
  input.classList.remove("error");

  const errorMessage = input.parentNode.querySelector(".error-message");
  if (errorMessage) {
    errorMessage.remove();
  }
}

document.querySelectorAll(".form-input, .form-textarea").forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.hasAttribute("required") && !this.value.trim()) {
      showFieldError(this, "This field is required");
    }
  });

  input.addEventListener("input", function () {
    if (this.classList.contains("error") && this.value.trim()) {
      hideFieldError(this);
    }
  });
});
