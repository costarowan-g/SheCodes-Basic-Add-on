function darkMode() {
  let mode = document.querySelector(".mode");
  mode.classList.remove("mode");
  mode.classList.add("dark");
  console.log(mode.classList);
}

let button = document.querySelector("button");
button.addEventListener("click", darkMode);
