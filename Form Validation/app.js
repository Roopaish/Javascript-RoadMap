// Script
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

const errorEls = document.querySelectorAll(".error");
const nameErrEl = errorEls[0];
const emailErrEl = errorEls[1];

const passwordValidatorEls = document.querySelectorAll(".password-validator");
const characterEl = passwordValidatorEls[0]; // show if password has 8 characters or not
const uppercaseEl = passwordValidatorEls[1]; // show if password contains 1 uppercase or not
const lowercaseEl = passwordValidatorEls[2]; // show if password contains 1 lowercase or not
const symbolEl = passwordValidatorEls[3]; // show if password contains 1 symbol or not
const numberEl = passwordValidatorEls[4]; // show if password contains 1 number or not

const registerEl = document.getElementById("register");

document.getElementById("form").onsubmit = (e) => {
  e.preventDefault();
  if (validateEmail() && validateName() && validatePassword()) {
    registerEl.innerText = "Registered";
  } else {
    registerEl.innerText = "Error";
    setTimeout(() => (registerEl.innerText = "Register"), 1000);
  }
};

// Full name validation
nameEl.oninput = () => {
  nameEl.value = nameEl.value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
  validateName();
};

const validateName = () => {
  if (
    nameEl.value.search(/^([A-z]{3,16})( [A-z]{3,16})?( [A-z]{3,16})$/) != -1
  ) {
    nameErrEl.classList.remove("show");
    nameErrEl.innerText = "";
    return true;
  } else {
    nameErrEl.classList.add("show");
    nameErrEl.innerText =
      "Please input a valid name (eg:Ali Gaite, Robert Downey Junior)";
    return false;
  }
};

// Email validation
emailEl.oninput = () => validateEmail();

const validateEmail = () => {
  if (
    emailEl.value
      .toLowerCase()
      .search(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) != -1
  ) {
    emailErrEl.classList.remove("show");
    emailErrEl.innerText = "";
    return true;
  } else {
    emailErrEl.classList.add("show");
    emailErrEl.innerText = "Please input a valid email (eg:hello@gmail.com)";
    return false;
  }
};

// Validate Password
passwordEl.oninput = () => validatePassword();

const validatePassword = () => {
  const password = passwordEl.value;
  var errCount = 0;

  if (password.length >= 8) {
    characterEl.setAttribute("data-content", "✔");
  } else {
    characterEl.setAttribute("data-content", "❌");
    errCount++;
  }

  if (password.search(/[0-9]/g) != -1) {
    numberEl.setAttribute("data-content", "✔");
  } else {
    numberEl.setAttribute("data-content", "❌");
    errCount++;
  }

  if (password.search(/[A-Z]/g) != -1) {
    uppercaseEl.setAttribute("data-content", "✔");
  } else {
    uppercaseEl.setAttribute("data-content", "❌");
    errCount++;
  }

  if (password.search(/[a-z]/g) != -1) {
    lowercaseEl.setAttribute("data-content", "✔");
  } else {
    lowercaseEl.setAttribute("data-content", "❌");
    errCount++;
  }

  if (password.search(/\W|_/g) != -1) {
    symbolEl.setAttribute("data-content", "✔");
  } else {
    symbolEl.setAttribute("data-content", "❌");
    errCount++;
  }

  return errCount == 0 ? true : false;
};
