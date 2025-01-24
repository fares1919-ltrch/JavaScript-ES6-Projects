# Rock Paper Scissors Game Documentation

## Overview

This is a simple implementation of the classic Rock Paper Scissors game. It allows a player to choose one of three options (Rock, Paper, or Scissors) and play against a computer. The game keeps track of scores and displays the winner after each round. The player can reset the game at any time.

### Features

- Player can select Rock, Paper, or Scissors using clickable buttons.
- The computer randomly selects one of the three options.
- The winner is determined based on the classic rules:
    - Rock beats Scissors.
    - Scissors beats Paper.
    - Paper beats Rock.
    - If both player and computer choose the same option, it's a tie.
- Displays the current score for both player and computer.
- Allows the player to reset the game and start fresh.

---

## **Files Structure**

1. **index.html** – HTML file that contains the structure of the game interface.
2. **script.js** – JavaScript file that contains the game logic, handling user input, calculating results, and updating the scores.
3. **style.css** – CSS file to style the game and layout.

---

## **HTML: `index.html`**

This file contains the structure of the page, including the buttons for choosing Rock, Paper, and Scissors, as well as displaying the game results and scores.

### Key Elements:

- `<h1>`: The header showing the game title.
- `.buttons`: Container for the three game choice buttons (Rock, Paper, Scissors).
- `#results`: Displays the current score of the player and the computer.
- `.replay-button`: Button that allows the user to reset the game.

---

## **CSS: `style.css`**

This file defines the styles for the game interface, making it visually appealing.

### Key Styles:

- The game is centered on the page using Flexbox.
- Each button has hover effects to improve user interaction.
- A clean, minimalistic design with a modern look and feel.

---

## **JavaScript: `script.js`**

This file contains the logic of the game. It defines the core functions that manage the game's flow, including generating random choices for the computer, determining the winner, and updating the scores.

### Key Functions:

1. **`playGame(playerChoice)`**
    - Initiates the game round.
    - Accepts the player's choice (Rock, Paper, or Scissors).
    - Calls other functions to get the computer's choice and determine the result.
2. **`getComputerChoice()`**
    - Randomly selects a choice for the computer (Rock, Paper, or Scissors).
    - Returns the computer's choice.
3. **`determineWinner(playerChoice, computerChoice)`**
    - Determines the winner based on the player's choice and the computer's choice.
    - Checks if the player wins, the computer wins, or if it's a tie.
    - Updates the player's or computer's score as needed.
4. **`displayResults(playerChoice, computerChoice, result)`**
    - Updates the HTML to display the player's and computer's choices, as well as the result of the game round.
    - Displays the current score after each round.
5. **`updateScores()`**
    - Updates the displayed scores for both the player and the computer.
6. **`resetGame()`**
    - Resets the game to its initial state (score set to 0 and game results cleared).
    - Resets the text content for the player and computer results.

### Event Listeners:

- Buttons: Each button (Rock, Paper, Scissors) has an event listener that calls the `playGame()` function with the corresponding choice.
- Replay Button: The replay button has an event listener that calls `resetGame()` to reset the game state.

---

## **How to Use**

1. **Play the Game:**
    - Click on one of the three buttons (Rock, Paper, or Scissors) to make your choice.
    - The computer will randomly choose one of the options.
    - The winner will be displayed, and the scores will be updated.
2. **View the Results:**
    - The current scores for the player and computer will be shown under their respective names.
    - The result of the game round will be displayed below the scores.
3. **Replay the Game:**
    - Click the "Replay" button to reset the game and start a new round.

---

## **Example Gameplay**

1. The player clicks on the "✋🏼" (Paper) button.
2. The computer randomly selects "👊🏼" (Rock).
3. The result displays: "You win!"
4. The scores are updated: Player: 1, Computer: 0.
5. The player can click "Replay" to reset the game and play again.

---

## **Future Improvements (Optional)**

- **Add animations** for when the player or computer makes a choice.
- **Add sound effects** to enhance the gameplay experience.
- **Implement multiplayer mode**, where two players can play against each other.

---

## **Conclusion**

This is a simple, interactive, and fun implementation of the Rock Paper Scissors game. It provides a user-friendly experience with a clean interface and clear game flow. The game is easily extensible with additional features or improvements.