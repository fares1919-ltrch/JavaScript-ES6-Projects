function Result() {
    const NumOfDice = parseInt(document.getElementById("NumOfDice").value);
    const DiceResult = document.getElementById("DiceResult");
    const DiceImages = document.getElementById("DiceImages");
    const numbers = [];
    const images = [];
    for (let i = 0; i < NumOfDice; i++) {
      let x = Math.floor(Math.random() * 6) + 1;
      numbers.push(x);
      images.push(`<img src="diceimages/${x}.png" alt="Dice ${x}">`);
    }
    DiceResult.textContent = `Dice: ${numbers.join(", ")}`;
    DiceImages.innerHTML = images.join("");
  }
  