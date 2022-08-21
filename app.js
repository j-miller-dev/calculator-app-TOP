// Variables
let digitDisplay = document.querySelector(".display-text");
let displayValue = "";
let firstValue = "";
let secondValue = 0;
let activeOperator = "";
const buttonClick = document.querySelectorAll(".keypad-button");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
// let firstValue = 0;

// Simple calculator functions
// add
function add(a) {
  var total = 0;
  for (var i in a) {
    total += a[i];
  }
  return total;
}

// subtract
function subtract(a) {
  let total = a[0];
  for (let i = 1, length = a.length; i < length; i++) {
    total -= a[i];
  }
  return total;
}

// multiply
function multiply(a) {
  let total = a[0];
  for (let i = 1, length = a.length; i < length; i++) {
    total *= a[i];
  }
  return total;
}

// divide
function divide(a) {
  let total = a[0];
  for (let i = 1, length = a.length; i < length; i++) {
    total /= a[i];
  }
  return total;
}

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

// Clear the display function
function clearDisplay() {
  displayValue = "";
  digitDisplay.innerHTML = displayValue;
  firstValue = 0;
}

// Event listeners
// If user clicks on a button that contains "keypad-button", run the following function
// Change the display value to the value of the button that was clicked
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("clear")) {
    clearDisplay();
  } else if (e.target.classList.contains("keypad-button")) {
    digitDisplay.textContent += e.target.textContent;
    displayValue += e.target.textContent;
  }
});

// Detect when user clicks on an operator and record which operator was clicked
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("operator")) {
    e.target.classList.add("operator-clicked");
    // Remove the operator-clicked class from all other operators

    activeOperator = e.target.textContent;
    console.log(activeOperator);
  }
});

// equalsButton.onclick = operate(displayValue, secondValue, result);

// When equals is clicked, run the operate function and display the result in the display
equalsButton.addEventListener("click", () => {});

// If user clicks on the clear button clear the display and reset the display value to 0
clearButton.addEventListener("click", () => {
  clearDisplay();
});
