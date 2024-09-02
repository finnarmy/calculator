// Appends values (numbers and operators) to the display when buttons are pressed
function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value; // Append value to the display
}

// Clears the entire display
function clearDisplay() {
    document.getElementById("display").value = '';
}

// Deletes the last digit or operator from the display
function deleteDigit() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1); // Remove the last character
}

// Calculates the result based on the current input
function calculate() {
    const display = document.getElementById("display");
    try {
        // Use eval to evaluate the mathematical expression
        display.value = eval(display.value) || "";
    } catch {
        // If an error occurs (like invalid input), show "Error"
        display.value = "Error";
    }
}
