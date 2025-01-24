document.getElementById('randomButton').addEventListener('click', () => {
    const maxInput = document.getElementById('max');
    const minInput = document.getElementById('min');
    const randomNumberDisplay = document.getElementById('randomNumber');
  
    const max = parseInt(maxInput.value, 10);
    const min = parseInt(minInput.value, 10);
  
    if (isNaN(max) || isNaN(min)) {
      randomNumberDisplay.textContent = "Please enter valid numbers for Maximum and Minimum.";
      return;
    }
  
    if (min > max) {
      randomNumberDisplay.textContent = "Minimum cannot be greater than Maximum.";
      return;
    }
  
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumberDisplay.textContent = randomNumber;
  });
  