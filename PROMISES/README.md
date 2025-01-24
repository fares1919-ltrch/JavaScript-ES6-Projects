# DOCUMENTATION

### **1. Project: Sequential Visibility Change (Promises in Action)**

### **Overview**

This project demonstrates how to use **Promises** in JavaScript to perform sequential actions, such as revealing elements on the webpage with a delay. The example involves displaying a series of titles one by one after a delay of 1 second each.

### **HTML Structure**

- **Title Elements (`h1`)**: These elements will have their visibility toggled from "hidden" to "visible" in sequence.
- **Script Link**: The project uses an external JavaScript file `script.js` to control the logic.

```html

<h1 id="title1" style="visibility: hidden;">title 1</h1>
<h1 id="title2" style="visibility: hidden;">title 2</h1>
<h1 id="title3" style="visibility: hidden;">title 3</h1>
<h1 id="title4" style="visibility: hidden;">title 4</h1>
```

### **JavaScript Logic**

The `change_visibility` function is used to show the titles sequentially using **Promises**. Here’s how it works:

- A **Promise** is created for each title. After a `setTimeout` of 1 second, the visibility of each title is set to "visible".
- After each promise is resolved, another one is triggered, creating a chain of actions. This is done using `.then()`, ensuring the titles appear one by one.

### **How Promises Work in This Project**

A **Promise** in JavaScript represents an asynchronous operation that might either resolve successfully or fail. In this project:

- The first `Promise` is created when the `change_visibility` function runs.
- The `resolve` method is used to notify the system that the title visibility change is complete, and then the next `Promise` runs.
- The `.then()` method ensures that each title’s visibility change occurs only after the previous one is complete, creating a sequential effect.

### **Code Example**

```jsx
function change_visibilty(){
    new Promise((resolve,reject)=>{  // First promise
        setTimeout(()=>{
            document.getElementById("title1").style.visibility="visible";
            resolve(); // Resolve the promise after the timeout
        },1000)
    }).then(()=>{  // Next action after first promise resolves
        return new Promise((resolve)=>{
            setTimeout(()=>{
                document.getElementById("title2").style.visibility="visible";
                resolve();
            },1000)
        })
    }).then(()=>{  // Continue chaining promises
        return new Promise((resolve)=>{
            setTimeout(()=>{
                document.getElementById("title3").style.visibility="visible";
                resolve();
            },1000)
        })
    }).then(()=>{  // Final promise
        setTimeout(()=>{
            document.getElementById("title4").style.visibility="visible";
        },1000)
    })
}
```

### **Key Concepts**

- **Promises**: Used to handle asynchronous behavior, in this case, managing delays.
- **Sequential Execution**: Promises are chained using `.then()`, ensuring each title is displayed in sequence.
- **setTimeout**: Used to simulate delays, so titles appear with a delay between them.

---

### **2. Project: Number Guessing Game with Promises**

### **Overview**

This is a simple **Number Guessing Game** that utilizes **Promises** to control the flow of the game. The player must guess a number between 1 and 100, and the game provides feedback on whether the guess is too low, too high, or correct. Each part of the game (such as showing instructions, input fields, and feedback) is displayed using promises.

### **HTML Structure**

- **Game Instructions and Inputs**: The page contains various HTML elements, such as instructions, an input field, and a button for submitting guesses.
- **Result Messages**: Feedback on whether the guess is too high, too low, or correct is shown dynamically after each guess.

```html
<h1 id="title1" style="visibility: hidden;">Guess the number between 1 and 100</h1>
<p id="title2" style="visibility: hidden;">Enter a guess!</p>
<input type="number" id="guess" min="1" max="100" placeholder="Your guess">
<button id="submitGuess" style="visibility: hidden;">Submit Guess</button>
<p id="message"></p>
<p id="attempts" style="visibility: hidden;">Attempts: 0</p>
```

### **JavaScript Logic**

In this game, promises control the flow of revealing elements one after the other and handling user input:

1. The game’s title, instructions, and submit button appear sequentially, each after a delay.
2. When the player submits a guess, it is checked against the randomly generated number. Based on the result, feedback is shown about whether the guess was too high, too low, or correct.

### **How Promises Work in This Project**

Promises in this game are used to control the timed sequence of events (e.g., showing instructions, accepting guesses, providing feedback). Here’s the flow:

- **Promises are used to reveal elements** (e.g., instructions, input field, submit button) one by one.
- Each promise resolves after a `setTimeout` to simulate delays, creating a seamless experience for the user.
- When the player makes a guess, feedback is displayed based on the correctness of the guess, updating the message dynamically.

### **Code Example**

```jsx
// Function to show messages with promises
function showMessage(id, message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById(id).style.visibility = "visible";
            document.getElementById(id).textContent = message;
            resolve();
        }, delay);
    });
}

// Start the game with sequential messages
function startGame() {
    showMessage("title1", "Guess the number between 1 and 100", 1000)
    .then(() => showMessage("title2", "Enter your guess!", 2000))
    .then(() => showMessage("submitGuess", "Submit Guess", 3000))
    .then(() => showMessage("attempts", "Attempts: 0", 3000));

    document.getElementById("submitGuess").addEventListener("click", checkGuess);
}
```

### **Key Concepts**

- **Promises**: Used to control the sequence of timed actions (e.g., displaying instructions, feedback).
- **Sequential Execution**: Using `.then()` ensures that elements are revealed in the right order.
- **User Interaction**: The user's guesses are evaluated with each guess resulting in feedback, using asynchronous handling with promises.

---

### **Promises in JavaScript: What Are They?**

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation. It is used to handle asynchronous code in a cleaner and more manageable way compared to traditional callbacks.

- **Promise States**:
    - **Pending**: The promise is still being processed.
    - **Resolved**: The promise was successfully completed.
    - **Rejected**: The promise was not successful.
- **Using Promises**:
    - Promises are used to handle actions that take time to complete, such as fetching data, or in these examples, managing timed sequences.
    - `.then()` is used to handle what happens after a promise resolves, creating a chain of actions.
    - `.catch()` can be used to handle errors if a promise fails.

---

### **Conclusion**

In both projects, **Promises** are used to control the flow of asynchronous actions, such as revealing game elements after a delay or checking the player's guesses. By chaining promises together using `.then()`, we ensure that actions happen in a specific order, making the user experience smooth and predictable.