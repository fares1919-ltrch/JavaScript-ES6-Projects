let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Function to handle showing messages with Promises
function showMessage(id, message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById(id).style.visibility = "visible";
            document.getElementById(id).textContent = message;
            resolve();
        }, delay);
    });
}

// Function to handle the user's guess with promises
function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    const messageElement = document.getElementById("message");
    const attemptsElement = document.getElementById("attempts");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = "Please enter a number between 1 and 100!";
        return;
    }

    attempts++;
    attemptsElement.textContent = `Attempts: ${attempts}`;

    if (userGuess === randomNumber) {
        messageElement.textContent = "Congratulations! You've guessed the correct number! 🎉";
        messageElement.style.color = "green";
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "Too low! Try again.";
        messageElement.style.color = "orange";
    } else {
        messageElement.textContent = "Too high! Try again.";
        messageElement.style.color = "orange";
    }

    document.getElementById("guess").value = ''; // Clear the input field after each guess
}

// Function to start the game flow with promises
function startGame() {
    showMessage("title1", "Guess the number between 1 and 100", 1000)
    .then(() => showMessage("title2", "Enter your guess!", 2000))
    .then(() => showMessage("submitGuess", "Submit Guess", 3000))
    .then(() => showMessage("attempts", "Attempts: 0", 3000));

    document.getElementById("submitGuess").addEventListener("click", checkGuess);
}

document.addEventListener("DOMContentLoaded", startGame);
