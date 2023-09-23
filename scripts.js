//TOGGLE THEME

let toggle = document.querySelector(".toggle-theme");
let bulb = document.querySelector("#bulb");


toggle.addEventListener("click", function (e) {
  e.preventDefault();

  if (document.body.classList.contains("dark-mode")) {
    // Turning the theme off:
    document.body.classList.remove("dark-mode");

    // Reverse logic on the button text, so that users can turn
    // the theme back on and aria is the same:
    document.getElementById("curve-text").textContent = "lights off";
    toggle.ariaLabel = "dark mode off";
  } else {
    document.body.classList.add("dark-mode");
    document.getElementById("curve-text").textContent = "lights on";
    toggle.ariaLabel = "dark mode on";

  }
});

//DETECT PREFERENCE
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark-mode");
}