const passwordDisplay = document.querySelector("[data-passwordDisplay]");

const copyBtn = document.querySelector("[data-copy]");

const copyMsg = document.querySelector("[data-copyMsg]");

const inputSlider = document.querySelector("[data-lengthSlider]");

const lengthDisplay = document.querySelector("[data-lengthNumber]");

const uppercaseCheck = document.querySelector("#uppercase");

const lowercaseCheck = document.querySelector("#lowercase");

const numbersCheck = document.querySelector("#numbers");

const symbolsCheck = document.querySelector("#symbols");

const indicator = document.querySelector("[data-indicator]");

const generateBtn = document.querySelector(".generateButton");

const allCheckBox = document.querySelectorAll("input[type=checkbox]");

let password = "";
let passwordLength = 10;
let checkCount = 1;

// !Set Password Length
function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;
}
handleSlider();

function setIndicator(color) {
  indicator.style.backgroundColor = color;
}

function getRandomInt(min, max) {
  return Math.floor(random() * (max - min)) + min;
}

function generateRandomNumber() {
  return getRandomInt(0, 9);
}

function generateLowerCase() {
  return String.fromCharCode(getRandomInt(97, 123));
}

function generateUpperCase() {
  return String.fromCharCode(getRandomInt(65, 91));
}
