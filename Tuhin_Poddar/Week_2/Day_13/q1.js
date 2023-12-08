document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting by default

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for basic email validation

    // Validate name field
    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    // Validate email field
    if (!emailFormat.test(emailInput.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Form submitted successfully!");
  });
});
