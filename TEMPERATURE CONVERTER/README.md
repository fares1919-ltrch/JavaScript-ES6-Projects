# Untitled

# **Temperature Conversion Project Documentation**

## **Project Overview**

This project implements a simple **Temperature Conversion** tool that allows users to convert temperatures between Celsius and Fahrenheit. The tool has two conversion options:

1. **Celsius to Fahrenheit**
2. **Fahrenheit to Celsius**

The user can input a temperature value and choose the desired conversion unit. Upon clicking the "Convert" button, the tool performs the conversion and displays the result.

---

## **Project Structure**

### 1. **HTML (index.html)**

The HTML file defines the structure of the form, including the input field for temperature, radio buttons for conversion type selection, a button to trigger the conversion, and a paragraph to display the result.

### Key elements:

- **`<input type="number" id="TextBox">`**: This input field allows the user to enter the temperature value.
- **`<input type="radio" id="Fahrenheit" name="conversionType">`**: Radio button for converting from Celsius to Fahrenheit.
- **`<input type="radio" id="Celsius" name="conversionType">`**: Radio button for converting from Fahrenheit to Celsius.
- **`<button id="submitButton">`**: A button that triggers the conversion when clicked.
- **`<p id="resultText">`**: Displays the conversion result or an error message.

---

### 2. **CSS (temp.css)**

The CSS file is used to style the form and other elements of the page. It includes styling for layout, colors, buttons, and hover effects to enhance the user experience.

### Key Styles:

- **Body styling**: The body has a background color and text styling to ensure readability.
- **Form styling**: The form is centered on the page using Flexbox and has a box shadow and rounded corners for a modern look.
- **Input and button styling**: Custom styles for the input fields and button with hover effects and focus states.
- **Result text styling**: The result paragraph has a specific color and margin to separate it from the input fields.

---

### 3. **JavaScript (temp.js)**

The JavaScript file handles the logic behind the temperature conversion. It listens for the button click event, checks which radio button is selected, performs the necessary conversion, and displays the result.

### Key Functions:

- **Event listener on button**: When the user clicks the "Convert" button, the event listener executes the function to perform the conversion.
- **Input validation**: The script checks if the user has entered a valid temperature and if a conversion unit is selected.
- **Conversion logic**:
    - **Celsius to Fahrenheit**: The formula used is `temp * 9/5 + 32`.
    - **Fahrenheit to Celsius**: The formula used is `(temp - 32) * 5/9`.
- **Result display**: After performing the conversion, the result is displayed in the `<p>` element with the `id="resultText"`.

---

## **Features**

- **Temperature Input**: The user can input a temperature in the designated input field.
- **Conversion Options**: Users can choose between Celsius to Fahrenheit or Fahrenheit to Celsius using radio buttons.
- **Result Output**: The conversion result is displayed in a clear and concise format below the button.
- **Input Validation**: Ensures that the user provides a valid temperature and selects a conversion unit before proceeding.
- **Responsive Design**: The layout adjusts to fit different screen sizes and devices.

---

## **Usage Instructions**

1. Open the **index.html** file in a browser.
2. Enter the temperature value in the input field.
3. Select the conversion type (Celsius to Fahrenheit or Fahrenheit to Celsius) using the radio buttons.
4. Click the **Convert** button.
5. The result will appear below the button, indicating the converted temperature value.
6. If no conversion unit is selected or the input is invalid, an error message will be displayed.

---

## **Code Explanation**

### HTML (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="temp.css">
    <title>Temperature Conversion</title>
</head>
<body>
    <div class="container">
        <form id="tempForm">
            <h1>Temperature Conversion</h1>
            <input type="number" id="TextBox" placeholder="Enter temperature" required><br>

            <div class="radio-group">
                <input type="radio" id="Fahrenheit" name="conversionType">
                <label for="Fahrenheit">Celsius to Fahrenheit</label><br>

                <input type="radio" id="Celsius" name="conversionType">
                <label for="Celsius">Fahrenheit to Celsius</label><br>
            </div>

            <button type="button" id="submitButton">Convert</button>
            <p id="resultText"></p>
        </form>
    </div>
    <script src="temp.js"></script>
</body>
</html>
```

**Explanation**:

- The `<form>` contains an input for the temperature and radio buttons for the conversion type.
- A submit button is provided to trigger the conversion logic.
- A paragraph element (`<p>`) is used to display the conversion result.

### JavaScript (temp.js)

```jsx
document.getElementById('submitButton').addEventListener('click', () => {
    const inputTemp = document.getElementById('TextBox').value;
    const fahrenheitChecked = document.getElementById('Fahrenheit').checked;
    const celsiusChecked = document.getElementById('Celsius').checked;
    const resultText = document.getElementById('resultText');

    if (!inputTemp) {
        resultText.textContent = "Please enter a valid temperature.";
        return;
    }

    let result;
    const temp = parseFloat(inputTemp);

    if (fahrenheitChecked) {
        result = (temp * 9 / 5) + 32;
        resultText.textContent = `${result.toFixed(1)} °Fahrenheit`;
    } else if (celsiusChecked) {
        result = (temp - 32) * (5 / 9);
        resultText.textContent = `${result.toFixed(1)} °Celsius`;
    } else {
        resultText.textContent = "Please select a conversion unit.";
    }
});
```

**Explanation**:

- The script listens for a click event on the "Convert" button.
- It checks if the input field is not empty and if a radio button is selected.
- Depending on the selected conversion type, the appropriate formula is applied.
- The result is displayed in the paragraph below the button.

### CSS (temp.css)

```css
General body and container styling */
body {
    background-color: #d8dadc;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #333;
}

.container {
    width: 100%;
    max-width: 380px;
    padding: 20px;
    background-color: #6c4fa1;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    font-size: 1.8em;
    color: #e8e8e8;
    margin-bottom: 20px;
}

/* Form styling */
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input[type="number"], input[type="radio"] {
    margin: 10px 0;
    padding: 8px 12px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 1em;
    outline: none;
    width: 80%;
}

input[type="radio"] {
    width: auto;
}

input[type="radio"]:checked + label {
    font-weight: bold;
}

button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #6c4fa1;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #5a3e89;
}

/* Text styling */
p {
    margin-top: 20px;
    color: #3d2550;
    font-size: 1.2em;
}

.radio-group {
    margin-top: 15px;
}

/* Focus effect */
input:focus {
    border-color: #6c4fa1;
    box-shadow: 0 0 5px rgba(108, 79, 161, 0.5);
}
```

**Explanation**:

- The body has a clean and modern design with a centered form.
- The form elements (inputs, button) are styled with clear padding, margin, and borders for a user-friendly interface.
- Hover and focus effects are added for interactivity.

---

## **Conclusion**

This project is a simple yet effective way to convert temperatures between Celsius and Fahrenheit. It uses modern web technologies such as HTML, CSS, and JavaScript (ES6+), offering a clean user interface and responsive design.

You can extend this project by adding more temperature scales, error handling, or even converting other types of units.