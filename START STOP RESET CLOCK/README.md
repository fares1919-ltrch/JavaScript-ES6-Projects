# Stopwatch Project Documentation

## **Project Overview**

This is a simple stopwatch web application built using HTML, CSS, and JavaScript (ES6+). It allows users to start, stop, and reset a stopwatch timer. The project is designed with a clean and responsive user interface, ensuring a smooth experience on both desktop and mobile devices.

---

## **Table of Contents**

1. [Features](https://www.notion.so/Stopwatch-Project-Documentation-1840840dfa8d80d9bc91ebbba9d820e8?pvs=21)
2. [Technologies Used](https://www.notion.so/Stopwatch-Project-Documentation-1840840dfa8d80d9bc91ebbba9d820e8?pvs=21)
3. [Folder Structure](https://www.notion.so/Stopwatch-Project-Documentation-1840840dfa8d80d9bc91ebbba9d820e8?pvs=21)
4. [HTML Structure](https://www.notion.so/Stopwatch-Project-Documentation-1840840dfa8d80d9bc91ebbba9d820e8?pvs=21)
5. [CSS Styles](https://www.notion.so/Stopwatch-Project-Documentation-1840840dfa8d80d9bc91ebbba9d820e8?pvs=21)
6. [JavaScript Functionality](https://www.notion.so/Stopwatch-Project-Documentation-1840840dfa8d80d9bc91ebbba9d820e8?pvs=21)
7. [Responsive Design](https://www.notion.so/Stopwatch-Project-Documentation-1840840dfa8d80d9bc91ebbba9d820e8?pvs=21)
8. [How to Run the Project](https://www.notion.so/Stopwatch-Project-Documentation-1840840dfa8d80d9bc91ebbba9d820e8?pvs=21)
9. [Future Enhancements](https://www.notion.so/Stopwatch-Project-Documentation-1840840dfa8d80d9bc91ebbba9d820e8?pvs=21)

---

## **Features**

- **Start Timer:** The user can start the stopwatch.
- **Stop Timer:** The user can stop the stopwatch at any point.
- **Reset Timer:** The user can reset the stopwatch to 00:00:00:00.
- **Time Display:** The stopwatch displays time in the format of hours, minutes, seconds, and milliseconds (HH:MM:SS:MS).
- **Responsive UI:** The user interface adjusts automatically for mobile and desktop devices.
- **Button Interactions:** Buttons for start, stop, and reset change color and behavior when clicked or disabled.

---

## **Technologies Used**

- **HTML5:** For creating the structure of the webpage.
- **CSS3:** For styling the webpage, including layout adjustments and animations.
- **JavaScript (ES6+):** For implementing the stopwatch functionality with modern JavaScript features like `let`, `const`, `arrow functions`, etc.
- **Flexbox:** For flexible and responsive button layouts.
- **Media Queries:** To ensure the app is responsive on different screen sizes.

---

## **Folder Structure**

```bash
/stopwatch-project
│
├── /assets
│   ├── bg.jpg                  # Background image
│
├── /css
│   ├── style.css               # Styles for the stopwatch application
│
├── /js
│   ├── script.js               # JavaScript file for stopwatch logic
│
├── index.html                  # Main HTML file for the stopwatch app
```

- `assets/`: This folder contains any media files used in the project (e.g., images).
- `css/`: This folder holds the stylesheets for the project.
- `js/`: Contains JavaScript files for the stopwatch functionality.
- `index.html`: The main HTML file that brings all the components together.

---

## **HTML Structure**

The HTML file (`index.html`) is structured as follows:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <div class="StopWatch">
            <h1>Stopwatch</h1>
        </div>
        <div class="display">
            00:00:00:00
        </div>
        <div class="controls">
            <button id="startBtn" onclick="Start()">START</button>
            <button id="stopBtn" onclick="Stop()">STOP</button>
            <button id="resetBtn" onclick="Reset()">RESET</button>
        </div>
    </div>

    <script src="js/script.js"></script>
</body>
</html>
```

- The `<h1>` displays the title of the stopwatch.
- The `<div class="display">` element shows the current time of the stopwatch.
- The `<div class="controls">` contains the three buttons: **Start**, **Stop**, and **Reset**.

---

## **CSS Styles**

### Main CSS File (`css/style.css`):

The CSS file defines the look and feel of the project:

```css
/* Basic resets and styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Background and body styles */
body {
    background-image: url('assets/bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Gill Sans', sans-serif;
    color: #fff;
}

/* Container style */
.container {
    background: rgba(0, 0, 0, 0.6);
    padding: 30px;
    border-radius: 15px;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

/* Display section */
.display {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: bold;
}

/* Button controls */
.controls {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    max-width: 350px;
}

button {
    font-size: 1.25rem;
    padding: 12px 20px;
    background-color: #333;
    color: #e0e0e0;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    flex: 1;
    min-width: 90px;
}

button:disabled {
    background-color: #666;
    cursor: not-allowed;
}

button:hover:not(:disabled) {
    background-color: #555;
    transform: scale(1.1);
}

/* Responsive design */
@media (max-width: 600px) {
    .container {
        width: 90%;
    }

    .display {
        font-size: 2rem;
    }

    button {
        font-size: 1rem;
        padding: 10px 15px;
    }
}
```

- **Flexbox Layout:** Ensures the buttons are evenly spaced and the layout is responsive.
- **Button Styling:** Buttons change color on hover and are disabled when the stopwatch is running.

---

## **JavaScript Functionality**

### Main JavaScript File (`js/script.js`):

```jsx
const display = document.querySelector('.display');

let startTime, updatedTime, difference, tInterval;
let running = 0;

function Start() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = 1;
        document.getElementById('startBtn').disabled = true;
    }
}

function Stop() {
    if (running) {
        clearInterval(tInterval);
        running = 0;
        document.getElementById('startBtn').disabled = false;
    }
}

function Reset() {
    clearInterval(tInterval);
    running = 0;
    display.textContent = '00:00:00:00';
    document.getElementById('startBtn').disabled = false;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

window.onbeforeunload = function() {
    clearInterval(tInterval);
};
```

- **Start Function:** Starts the stopwatch and prevents starting a new timer while it's running.
- **Stop Function:** Stops the stopwatch.
- **Reset Function:** Resets the stopwatch to 00:00:00:00.
- **getShowTime Function:** Updates the time displayed on the stopwatch every millisecond.

---

## **Responsive Design**

The layout of the stopwatch is responsive and adjusts to different screen sizes:

- **Container:** Adjusts width based on the screen size.
- **Buttons:** Resize to fit the container, ensuring usability on mobile devices.

---

## **How to Run the Project**

1. Download or clone the project.
2. Ensure you have all the required files:
    - `index.html`
    - `css/style.css`
    - `js/script.js`
    - Background image `assets/bg.jpg`
3. Open the `index.html` file in a browser to start using the stopwatch.

---

## **Future Enhancements**

- **Sound Effects:** Add sound effects for starting, stopping, and resetting the stopwatch.
- **Save Time:** Implement a feature to save and view lap times.
- **Dark/Light Mode:** Add a toggle button to switch between dark and light themes.
- **Countdown Timer:** Add an option for a countdown timer in addition to the stopwatch.