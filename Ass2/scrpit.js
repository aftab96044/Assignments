document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const mailtoLink =
    `mailto:aftab@gmail.com?subject=Contact from Portfolio&body=` +
    `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

  window.location.href = mailtoLink;

  document.getElementById("status").innerText =
    "Your email app has been opened. Please send the message.";
});
