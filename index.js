function darkMode() {
  let mode = document.querySelector(".mode");
  if (mode.classList.contains("dark")) {
    mode.classList.remove("dark");
  } else {
    mode.classList.add("dark");
  }
  console.log(mode.classList);
}

let button = document.querySelector("#dark-button");
button.addEventListener("click", darkMode);
