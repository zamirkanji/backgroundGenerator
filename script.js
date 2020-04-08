let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let bodyContainer = document.querySelector(".body-container");
let randBtn = document.querySelector(".random-btn");


function setGradient() {
  bodyContainer.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = bodyContainer.style.background + ";";
  bodyContainer.appendChild(css);
}

function matchGradient() {
  color1.value = "#ff0000";
  color2.value = "#ffff00";
  css.textContent = "Initial Color Values: " + color1.value + ", " + color2.value;
}

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }







//need to find out what a two-digit hexadecimal number is... ##rrggbb
// the idea of setting up an event listener and calling the function part is done....that was super easy. just gotta figure out the random numbers/ alphabet???

function hexString() {
  // let r = Math.random().toString(16).substring(9);
  let r = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
  // let z = Math.random().toString(16).substring(9);
  let z = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);

  let leftColor = color1.value = r;
  let rightColor = color2.value = z;

  // let hexleft = "#" + r;
  // let hexRight = "#" + z;

  console.log(r, z);

  // let leftColor = color1.value = hexleft;
  // let rightColor = color2.value = hexRight;

  bodyContainer.style.background =
    "linear-gradient(to right, " + leftColor + ", " + rightColor + ")";
  css.textContent = bodyContainer.style.background + ";";
  // return "#" + r;
}

// function setRandColor() {
//    color1.value = getRndInteger;
//    color2.value = getRndInteger;
//    color1.value = hexString();
//    color2.value = hexString();
//    console.log(hexString());
// }

randBtn.addEventListener("click", hexString);
// randBtn.addEventListener("click", setRandColor)

window.addEventListener("load", matchGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
