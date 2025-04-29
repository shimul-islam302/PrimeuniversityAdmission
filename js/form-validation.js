// Form validation for registration page
(function () {
  "use strict";

  // Fetch the form element
  const form = document.getElementById("registrationForm");

  // Add event listener for form submission
  form.addEventListener(
    "submit",
    function (event) {
      // Check form validity
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      // Add 'was-validated' class to show validation messages
      form.classList.add("was-validated");

      // If form is valid, you can add AJAX submission here
      if (form.checkValidity()) {
        // In a real application, you would submit the form data to the server
        alert("Form submitted successfully!");
        // form.submit(); // Uncomment this to actually submit the form
      }
    },
    false
  );

  // Additional custom validation
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const gpa = document.getElementById("gpa");

  // Email validation
  email.addEventListener("input", function () {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("Please enter a valid email address");
    } else {
      email.setCustomValidity("");
    }
  });

  // Phone number validation (simple pattern)
  phone.addEventListener("input", function () {
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone.value)) {
      phone.setCustomValidity(
        "Please enter a valid phone number (10-15 digits)"
      );
    } else {
      phone.setCustomValidity("");
    }
  });

  // GPA validation
  gpa.addEventListener("input", function () {
    if (gpa.value < 0 || gpa.value > 4) {
      gpa.setCustomValidity("GPA must be between 0 and 4");
    } else {
      gpa.setCustomValidity("");
    }
  });
})();
