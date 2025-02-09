const form = document.querySelector("#form");
const email = document.querySelector("#email");
const signUpForm = document.querySelector(".sign-up-form");
const successMessage = document.querySelector(".success-message");
const errorHolder = document.getElementById("email-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formValidation();
});

function formValidation() {
  const emailValue = email.value.trim();
  if (emailValue === 0 || !isValidEmail(emailValue)) {
    email.style.backgroundColor = "rgba(255, 98, 87, 0.17)";
    setError("Email address required");
  } else {
    //clear error message
    errorHolder.innerHTML = "";

    // hide form page and show success message
    signUpForm.style.display = "none";
    successMessage.style.display = "grid";
    const registeredEmail = document.querySelector(".registered-email");
    registeredEmail.innerHTML = emailValue;
    toInitialPage();
  }
}

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function setError(message) {
  errorHolder.innerText = message;
  errorHolder.setAttribute("class", "error-message");
}

function toInitialPage() {
  const dismissBtn = document
    .querySelector(".dismiss")
    .addEventListener("click", () => {
      signUpForm.style.display = "grid";
      successMessage.style.display = "none";
      email.style.backgroundColor = "white";
      email.value = "";
    });
}
