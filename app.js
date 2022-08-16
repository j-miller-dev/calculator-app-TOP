// Variables
let digitDisplay = document.querySelector(".display-text");
const buttonClick = document.querySelectorAll(".keypad-button");
let displayValue = "0";
const clearButton = document.getElementById("#clear");

// Simple calculator functions
// add
function add(a) {
  var total = 0;
  for (var i in a) {
    total += a[i];
  }
  return total;
}

let numbers1 = [33, 44, 4, 6];
console.log(add(numbers1));

// subtract
function subtract(a) {
  let total = a[0];
  for (let i = 1, length = a.length; i < length; i++) {
    total -= a[i];
  }
  return total;
}
let numbers2 = [5, 2];
let numbers3 = [10, 2, 1, 5];
console.log(subtract(numbers2));
console.log(subtract(numbers3));
// multiply
function multiply(a) {
  let total = a[0];
  for (let i = 1, length = a.length; i < length; i++) {
    total *= a[i];
  }
  return total;
}
let numbers4 = [5, 2];
let numbers5 = [10, 50];
console.log(multiply(numbers4));
console.log(multiply(numbers5));
// divide
function divide(a) {
  let total = a[0];
  for (let i = 1, length = a.length; i < length; i++) {
    total /= a[i];
  }
  return total;
}

let numbers6 = [5, 2];
let numbers7 = [10, 50];
console.log(divide(numbers6));
console.log(divide(numbers7));

// Create an operate function that takes two numbers and an operator and returns the result of the operation.
function operate(a, b, operate) {
  if (operate === "+") {
    return add([a, b]);
  } else if (operate === "-") {
    return subtract([a, b]);
  } else if (operate === "*") {
    return multiply([a, b]);
  } else if (operate === "/") {
    return divide([a, b]);
  }
}

// Populate the display with number button clicks

// Event listeners
window.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("keypad-button")) {
    digitDisplay.textContent += e.target.textContent;
    displayValue += e.target.textContent;
  }
});

// Create a clear button that clears the display
clearButton.addEventListener("click", (e) => console.log("clear clicked"));
