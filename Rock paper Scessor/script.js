const choices = ['rock', 'paper', 'scissor'];
let playerScore = 0;
let computerScore = 0;

// Play the game with the player's choice
const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResults(playerChoice, computerChoice, result);
};

// Generate a random choice for the computer
const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

// Determine the winner based on the choices
const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    const winConditions = {
        rock: 'scissor',
        paper: 'rock',
        scissor: 'paper'
    };

    if (winConditions[playerChoice] === computerChoice) {
        playerScore++;
        updateScores();
        return 'You win!';
    } else {
        computerScore++;
        updateScores();
        return 'Computer wins!';
    }
};

// Display results on the screen
const displayResults = (playerChoice, computerChoice, result) => {
    document.getElementById('playerResult').innerHTML = `Player: ${playerChoice} <p>Score: <span id="playerScore">${playerScore}</span></p>`;
    document.getElementById('computerResult').innerHTML = `Computer: ${computerChoice} <p>Score: <span id="computerScore">${computerScore}</span></p>`;
    document.getElementById('result').textContent = `Result: ${result}`;
};

// Update the scores in the DOM
const updateScores = () => {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
};

// Reset the game to initial state
const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    document.getElementById('playerResult').textContent = 'Player: ';
    document.getElementById('computerResult').textContent = 'Computer: ';
    document.getElementById('result').textContent = 'Result: ';
};

// Attach event listeners to buttons
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => playGame(button.dataset.choice));
});

// Attach event listener to replay button
document.querySelector('.replay-button').addEventListener('click', resetGame);
