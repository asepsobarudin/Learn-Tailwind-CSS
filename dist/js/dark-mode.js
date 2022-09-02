const darkMode = document.querySelector("#dark-mode");
const html = document.querySelector("html");
let localDark = localStorage.getItem("dark-mode");

const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");

const labelDarkMode = document.querySelector("#labelDarkMode");

function DarkMode() {
  if (darkMode.checked) {
    html.classList.add("dark");
    sun.classList.remove("sunActive");
    sun.classList.add("sun");

    moon.classList.remove("moon");
    moon.classList.add("moonActive");
    localStorage.setItem("dark-mode", "dark");
  } else {
    html.classList.remove("dark");
    moon.classList.remove("moonActive");
    moon.classList.add("moon");

    sun.classList.remove("sun");
    sun.classList.add("sunActive");
    localStorage.setItem("dark-mode", "light");
  }
}

if (localDark === "dark") {
  html.classList.add("dark");
  sun.classList.remove("sunActive");
  sun.classList.add("sun");

  moon.classList.remove("moon");
  moon.classList.add("moonActive");
  localStorage.setItem("dark-mode", "dark");
} else {
  DarkMode();
}

darkMode.addEventListener("click", function () {
  DarkMode();
});

labelDarkMode.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    if (darkMode.checked) {
      darkMode.checked = false;
      DarkMode();
    } else {
      darkMode.checked = true;
      DarkMode();
    }
  }
});
