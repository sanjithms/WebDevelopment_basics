document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from submitting

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let errorMsg = document.getElementById("error-message");

  // Email Regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    errorMsg.textContent = "Please enter your name.";
  } else if (!emailPattern.test(email)) {
    errorMsg.textContent = "Invalid email address.";
  } else if (!/^\d{10}$/.test(phone)) {
    errorMsg.textContent = "Phone number must be 10 digits.";
  } else if (password.length < 8) {
    errorMsg.textContent = "Password must be at least 8 characters.";
  } else if (password !== confirmPassword) {
    errorMsg.textContent = "Passwords do not match.";
  } else {
    // Redirect to home page if all validations pass
    localStorage.setItem("username", name); // Store name for welcome
    window.location.href = "home.html";
  }
});
