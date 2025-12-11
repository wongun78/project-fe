document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
      const isClickInsideMenu = mobileMenu.contains(event.target);
      const isClickOnToggle = mobileMenuToggle.contains(event.target);

      if (
        !isClickInsideMenu &&
        !isClickOnToggle &&
        mobileMenu.classList.contains("active")
      ) {
        mobileMenu.classList.remove("active");
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        mobileMenu.classList.remove("active");
      }
    });
  }
});

function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "home.html";
  const navLinks = document.querySelectorAll(".navbar-link, .mobile-menu-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add("error");
      showError(input, "This field is required");
    } else {
      input.classList.remove("error");
      hideError(input);
    }
  });

  return isValid;
}

function showError(input, message) {
  const errorElement = input.nextElementSibling;
  if (errorElement && errorElement.classList.contains("error-message")) {
    errorElement.textContent = message;
  } else {
    const error = document.createElement("span");
    error.className = "error-message";
    error.textContent = message;
    input.parentNode.insertBefore(error, input.nextSibling);
  }
}

function hideError(input) {
  const errorElement = input.nextElementSibling;
  if (errorElement && errorElement.classList.contains("error-message")) {
    errorElement.remove();
  }
}

setActiveNavLink();
