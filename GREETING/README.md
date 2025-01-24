# Greeting Page

## Description

The Greeting Page is a simple and interactive web application that personalizes greetings based on user input. It dynamically updates the message displayed on the screen and provides a smooth and user-friendly experience.

---

## Files and Structure

```bash
greeting-page
│
├── index.html        # Main HTML file for the greeting page
├── styles.css        # CSS file for styling the page
├── greating-1.js     # JavaScript file for interactive functionality
```

---

## Features

- Dynamic greeting message based on user input.
- A default greeting for guests when no name is provided.
- Automatic focus on the input field when the page loads.
- Styled input fields and buttons for a visually pleasing experience.

---

## JavaScript Highlights

1. **Event Listener for Button Click**
    - The `addEventListener` method is used to handle the button's click event.
    - When clicked, the entered name is read from the input field, and a greeting message is dynamically updated in the `<h1>` element.
    
    ```jsx
    document.getElementById("submitBtn").addEventListener("click", () => {
        const name = document.getElementById("myInput").value.trim();
    
        const greetingMessage = name
            ? `Hello, ${name}! Have a great day! 🌟`
            : "Hello, Guest! Please provide your name next time! 😊";
    
        document.getElementById("myText").textContent = greetingMessage;
    });
    ```
    
    - **Trick:** The ternary operator (`condition ? trueValue : falseValue`) ensures concise and efficient conditional logic for determining the message.
2. **Focus on Input Field on Page Load**
    - The `focus` method is called on the input field to enhance usability, ensuring the user can immediately start typing their name.
    
    ```jsx
    document.getElementById("myInput").focus();
    ```
    
3. **Trimmed User Input**
    - The `trim()` function removes any leading or trailing whitespace from the user's input, ensuring clean and consistent data handling.
    
    ```jsx
    const name = document.getElementById("myInput").value.trim();
    ```
    
4. **Dynamic DOM Manipulation**
    - The greeting message in the `<h1>` element is updated dynamically using the `textContent` property.
    
    ```jsx
    document.getElementById("myText").textContent = greetingMessage;
    ```
    

---

## HTML Structure

- **Input Field:** Accepts the user's name.
    
    ```html
    <input
        id="myInput"
        type="text"
        placeholder="Enter your name"
        class="input-field"
    />
    ```
    
- **Button:** Submits the user’s input to display a personalized greeting.
    
    ```html
    <button id="submitBtn" class="btn">Submit</button>
    ```
    

---

## CSS Highlights

1. **Smooth Focus Transition on Input Field**
    - The border color changes smoothly when the input field gains focus.
    
    ```css
    .input-field:focus {
        border-color: #fcb69f;
    }
    ```
    
2. **Interactive Button Animation**
    - Hover and active states provide a better user experience with transitions and scaling effects.
    
    ```css
    .btn:hover {
        background: #ff7e67;
        transform: scale(1.05);
    }
    
    .btn:active {
        transform: scale(1);
    }
    ```
    
3. **Gradient Background**
    - A beautiful gradient is applied to the page's background for a modern look.
    
    ```css
    body {
        background: linear-gradient(to right, #ffecd2, #fcb69f);
    }
    ```
    

---

## How It Works

1. Open the `index.html` file in a web browser.
2. The input field will automatically gain focus for immediate typing.
3. Enter your name in the input field.
4. Click the "Submit" button:
    - If you enter a name, a personalized greeting is displayed.
    - If the input field is empty, a default greeting for a guest is shown.

---

## Example Output

- **Input:** `"Fares"`
- **Output:** `Hello, Fares! Have a great day! 🌟`
- **Input:** *(Empty)*
- **Output:** `Hello, Guest! Please provide your name next time! 😊`

---

## Requirements

- A modern web browser that supports HTML5, CSS3, and JavaScript.