var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8,9,10];
console.log("array: ",_.without(array,3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector(".gradient");
var button = document.querySelector("button");
setGradientColor();

function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandGradientColor() {
    var randCol1 = getRandomHexColor();
    var randCol2 = getRandomHexColor();

    console.log("Clicked!");
    body.style.background = "linear-gradient(to right, " + randCol1 + ", " + randCol2 + ")";
    color1.value = randCol1;
    color2.value = randCol2;
    css.textContent = body.style.background;
}
  

function setGradientColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background;
}



color1.addEventListener("input", setGradientColor)

color2.addEventListener("input", setGradientColor)

button.addEventListener("click",setRandGradientColor)