// Variables
let digitDisplay = document.querySelector(".display-text");
let displayValue = "";
let firstValue = 0;
let secondValue = 0;
let activeOperator = "";
const buttonClick = document.querySelectorAll(".keypad-button");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const operatorButtons = document.querySelectorAll(".operator");
// let firstValue = 0;

// Simple calculator functions
// add
function add(a) {
  let total = 0;
  for (let i in a) {
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
  } else if (operate == "-") {
    return subtract([a, b]);
  } else if (operate == "*") {
    return multiply([a, b]);
  } else if (operate == "/") {
    return divide([a, b]);
  }
}

// Clear the display function
function clearDisplay() {
  displayValue = "";
  digitDisplay.innerHTML = displayValue;
  firstValue = 0;
  secondValue = 0;
  activeOperator = "";
  // Untoggle all operator buttons
  operatorButtons.forEach((operator) => {
    if (
      operator.classList.contains("operator-clicked")
        ? operator.classList.remove("operator-clicked")
        : null
    );
  });
}

function isOperatorActive() {
  if (activeOperator === "") {
    return false;
  } else {
    return true;
  }
}

// Create a function that updates both firstValue and secondValue
function updateValues(value) {
  if (isOperatorActive()) {
    secondValue += value;
  } else {
    firstValue += value;
  }
}

// Create a function that updates the display correctly
function updateDisplay(value) {
  if (activeOperator === "") {
    parseInt((digitDisplay.innerHTML += value));
  } else {
    parseInt((digitDisplay.innerHTML += value));
  }
}

// Event listeners
// Clear display event listener
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("clear")) {
    clearDisplay();
  }
});

// If user clicks on a button that contains "keypad-button", run the following function
// Change the display value to the value of the button that was clicked
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("keypad-button")) {
    console.log("keypad-button clicked");
    updateValues(e.target.innerHTML);
    updateDisplay(e.target.innerHTML);
  }
});

// Detect when user clicks on an operator and record which operator was clicked
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("operator")) {
    // Remove the operator-clicked class from all other operators (essentially toggle between operators)
    operatorButtons.forEach((operator) => {
      if (
        operator.classList.contains("operator-clicked")
          ? operator.classList.remove("operator-clicked")
          : null
      );
      // Store the first variable
    });

    activeOperator = e.target.innerHTML;
    console.log("The current operator is... " + activeOperator);

    // Add the operator-clicked class to the operator that was clicked
    e.target.classList.add("operator-clicked");
  }
});

// When equals is clicked, run the operate function and display the result in the display
equalsButton.addEventListener("click", () => {
  console.log("equals clicked");
});

// If user clicks on the clear button clear the display and reset the display value to 0
clearButton.addEventListener("click", () => {
  console.log("clear display clicked");
  clearDisplay();
});
