const boxAlert = document.querySelector("#boxAlert");
const textAlert = document.querySelector("#textAlert");
const textConfirmAlert = document.querySelector("#textConfirmAlert");
const body = document.querySelector("body");

function BoxAlert(text) {
  confirmAlert.classList.remove("block");
  confirmAlert.classList.add('hidden');
  boxAlert.classList.remove("hidden");
  boxAlert.classList.add("block");
  textAlert.innerHTML = text;
}

function CloseAlert() {
  boxAlert.classList.remove("block");
  boxAlert.classList.add("hidden");
  confirmAlert.classList.remove("block");
  confirmAlert.classList.add('hidden');
}

const confirmAlert = document.querySelector("#confirmAlert");

function ConfirmAlert(text) {
  boxAlert.classList.remove("block");
  boxAlert.classList.add("hidden");
  confirmAlert.classList.remove("hidden");
  confirmAlert.classList.add("block");
  textConfirmAlert.innerHTML = text;
}
