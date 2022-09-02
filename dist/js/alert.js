const boxAlert = document.querySelector("#boxAlert");
const textAlert = document.querySelector("#textAlert");
const body = document.querySelector("body");
let time = 10;

function BoxAlert(text) {
  boxAlert.classList.remove("hidden");
  boxAlert.classList.add("block");
  textAlert.innerHTML = text;
  setTimeout(CloseAlert, time * 1000);
}

function CloseAlert() {
  boxAlert.classList.add("hidden");
}