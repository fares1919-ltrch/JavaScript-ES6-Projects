# Project Title:CALCULATRICE

### **Description:**

This is a simple calculator web application built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator interface includes buttons for numbers, operators, and a display area to show the current input and result.

### **Technologies Used:**

- **HTML:** Structure of the calculator interface.
- **CSS:** Styling the calculator to make it visually appealing.
- **JavaScript:** Functionality for the calculator operations like input handling, calculation, and clearing the display.

### **Features:**

- **Arithmetic Operations:** Supports addition, subtraction, multiplication, and division.
- **Decimal Support:** Allows the input of decimal numbers.
- **Clear Function:** Resets the input field to start a new calculation.
- **Error Handling:** Displays an error message if an invalid operation is performed.

### **Installation:**

1. Clone the repository or download the files.
2. Open the `index.html` file in any modern web browser to start using the calculator.

### **Usage:**

- Click on the buttons to input numbers and operators.
- Click the `=` button to calculate the result of the operation.
- Click the `CLEAR` button to reset the display.

### **File Structure:**

- `index.html`: Contains the structure of the calculator, including the display and button elements.
- `style.css`: Styles the calculator interface, including button layout and design.
- `script.js`: Contains the JavaScript code that handles input, calculation, and clearing the display.

![1.png](509f87e9-ac8e-43f2-9d28-88e47e5d38b6.png)

![2.png](e6922f6b-06c6-4141-b2c9-93ff7181f620.png)

### **Code Snippets:**

### **JavaScript Function for Handling Button Input:**

```jsx
function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}
```

This function appends the clicked value to the display.

### **JavaScript Function for Calculating the Result:**

```jsx
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
```

This function evaluates the expression entered in the display and shows the result. If the calculation is invalid, it displays "Error".

### **JavaScript Function for Clearing the Display:**

```jsx
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
```

This function clears the current input in the display.

### **Contributing:**

- If you would like to contribute to this project, feel free to fork the repository, make changes, and create a pull request.

### **License:**

This project is open-source. Feel free to use and modify it according to your needs.