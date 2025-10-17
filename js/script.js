document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alertBox.classList.remove("d-none", "alert-danger");
      alertBox.classList.add("alert-success");
      alertBox.textContent = "Thanks for contacting Glow's Kitchen!";
      form.reset();
    } else {
      alertBox.classList.remove("d-none", "alert-success");
      alertBox.classList.add("alert-danger");
      alertBox.textContent = "Please fill in all fields.";
    }
  });
});