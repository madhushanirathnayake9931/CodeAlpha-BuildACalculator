// Get the display screen
const display = document.getElementById("display");


// Add numbers to the display
function appendNumber(number) {

    if (display.value === "0") {
        display.value = number;
    } 
    else {
        display.value += number;
    }
}


// Add operators
function appendOperator(operator) {

    const lastCharacter = display.value.slice(-1);

    // Prevent adding two operators together
    if ("+-*/%".includes(lastCharacter)) {
        return;
    }

    display.value += operator;
}


// Clear the display
function clearDisplay() {
    display.value = "0";
}


// Delete the last character
function deleteLast() {

    if (display.value.length === 1) {
        display.value = "0";
    } 
    else {
        display.value = display.value.slice(0, -1);
    }
}


// Calculate the result
function calculate() {

    try {

        let expression = display.value;

        // Calculate the expression
        let result = eval(expression);

        // Display the result
        display.value = result;

    } 
    catch (error) {

        display.value = "Error";

    }
}


// Keyboard support
document.addEventListener("keydown", function(event) {

    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        appendNumber(key);
    }

    // Decimal point
    else if (key === ".") {
        appendNumber(".");
    }

    // Operators
    else if (key === "+" || key === "-" || key === "*" || key === "/" || key === "%") {
        appendOperator(key);
    }

    // Enter key
    else if (key === "Enter") {
        calculate();
    }

    // Backspace
    else if (key === "Backspace") {
        deleteLast();
    }

    // Escape key
    else if (key === "Escape") {
        clearDisplay();
    }

});