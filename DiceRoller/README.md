# Dice Roller

## Description

The Dice Roller is a simple web application that simulates rolling one or more dice. Users can specify the number of dice they want to roll, and the application displays the results numerically and visually using dice face images.

---

## Files and Structure

```bash
/dice-roller
│
├── index.html        # Main HTML structure of the project
├── diceroller.css    # Stylesheet for the dice roller
├── diceroller.js     # JavaScript file for the dice rolling functionality
└── diceimages/       # Folder containing dice face images (1.png, 2.png, ..., 6.png)
```

---

## How It Works

1. **Input:** The user enters the number of dice to roll in the input field.
    
    ```html
    <label for="NumOfDice">Choose Number Of Dices:</label>
    <input type="number" min="1" id="NumOfDice" value="1" />
    ```
    
2. **Button:** The "Roll Dice" button triggers the `Result()` function from the `diceroller.js` file.
    
    ```html
    <button id="btn" onclick="Result()">Roll Dice</button>
    ```
    
3. **Processing:**
    - Random numbers between 1 and 6 are generated for each die.
    - Dice face images are dynamically selected based on the results.
    
    ```jsx
    function Result() {
        const NumOfDice = parseInt(document.getElementById("NumOfDice").value);
        const DiceResult = document.getElementById("DiceResult");
        const DiceImages = document.getElementById("DiceImages");
        const numbers = [];
        const images = [];
        for (let i = 0; i < NumOfDice; i++) {
            let x = Math.floor(Math.random() * 6) + 1;
            numbers.push(x);
            images.push(`<img src="diceimages/${x}.png">`);
        }
        DiceResult.textContent = `Dice: ${numbers.join(', ')}`;
        DiceImages.innerHTML = images.join('');
    }
    ```
    
4. **Output:**
    - Numerical results are displayed in the `DiceResult` element.
    - The corresponding dice face images are shown in the `DiceImages` element.
    
    ```html
    <div id="DiceResult"></div>
    <div id="DiceImages"></div>
    ```
    

---

## Styling

- **Body Styling:**
    
    ```css
    body {
        background-color: rgba(101, 101, 101, 0.575);
        margin: 0;
    }
    ```
    
- **Button Styling:**
    
    ```css
    Button {
        font-size: 1.5rem;
        padding: 10px 15px;
        border-radius: 10px;
        border: none;
        background-color: rgb(49, 70, 87);
        color: white;
        cursor: pointer;
        margin: 15px;
    }
    button:hover {
        background-color: rgb(49, 70, 100);
    }
    button:active {
        background-color: rgb(72, 89, 113);
    }
    ```
    
- **Dice Images Container:**
    
    ```css
    DiceImages img {
        margin: 5px;
        width: 15%;
        aspect-ratio: 1/1;
    }
    ```
    

---

## How to Run

1. Open the `index.html` file in your web browser.
2. Enter the desired number of dice in the input field.
3. Click the "Roll Dice" button to generate the results.

---

## Example Output

- **Input:** `3`
- **Output:**
    - **Dice Result:** `Dice: 4, 2, 5`
    - **Dice Images:** (Images corresponding to the rolled numbers are displayed.)

---

## Requirements

- **Dice Images:** Ensure the `diceimages/` folder contains images named `1.png`, `2.png`, ..., `6.png`.
- **Browser Compatibility:** Works in modern web browsers that support HTML5, CSS3, and JavaScript.