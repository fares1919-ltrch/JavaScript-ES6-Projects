let counter = 0;

const countLabel = document.getElementById("count");
const btnDecrease = document.getElementById("btnDecrease");
const btnIncrease = document.getElementById("btnIncrease");
const btnReset = document.getElementById("btnReset");
const randomButton = document.getElementById("RandomButton");
const randomNumberLabel = document.getElementById("RandomNumber");
const minInput = document.getElementById("Min");
const maxInput = document.getElementById("Max");

// Update count
const updateCount = () => {
  countLabel.textContent = counter;
};

// Decrease count
btnDecrease.addEventListener("click", () => {
  counter--;
  updateCount();
});

// Increase count
btnIncrease.addEventListener("click", () => {
  counter++;
  updateCount();
});

// Reset count
btnReset.addEventListener("click", () => {
  counter = 0;
  updateCount();
});

// Generate random number within given range
randomButton.addEventListener("click", () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max)) {
    randomNumberLabel.textContent = "Please enter valid numbers for Maximum and Minimum.";
    return;
  }

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  randomNumberLabel.textContent = `Random Number: ${randomNum}`;
});
