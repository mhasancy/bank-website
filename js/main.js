document.getElementById("submit-btn").addEventListener("click", function () {
  //user email
  const emailField = document.getElementById("email-input");
  const userEmail = emailField.value;
  //user pass
  const passField = document.getElementById("pass-input");
  const userPass = passField.value;
  //   console.log(userPass);
  if (userEmail == "sontan@baap.com" && userPass == "password") {
    window.location.href = "banking.html";
  }
});
