const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

//! The code is to switch the UI between sign-in and sign-up modes

//* Clicking the sign-up button adds a class to the container that switches it to sign-up mode
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

//* Clicking the sign-in button removes that class, switching it back to sign-in mode
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

