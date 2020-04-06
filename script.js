let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let bodyContainer = document.querySelector(".body-container");

function setGradient() {
  bodyContainer.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = bodyContainer.style.background + ";";
  bodyContainer.appendChild(css);
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
