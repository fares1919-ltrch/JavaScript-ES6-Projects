document.getElementById('submitButton').addEventListener('click', () => {
    const inputTemp = document.getElementById('TextBox').value;
    const fahrenheitChecked = document.getElementById('Fahrenheit').checked;
    const celsiusChecked = document.getElementById('Celsius').checked;
    const resultText = document.getElementById('resultText');

    if (!inputTemp) {
        resultText.textContent = "Please enter a valid temperature.";
        return;
    }

    let result;
    const temp = parseFloat(inputTemp);

    if (fahrenheitChecked) {
        result = (temp * 9 / 5) + 32;
        resultText.textContent = `${result.toFixed(1)} °Fahrenheit`;
    } else if (celsiusChecked) {
        result = (temp - 32) * (5 / 9);
        resultText.textContent = `${result.toFixed(1)} °Celsius`;
    } else {
        resultText.textContent = "Please select a conversion unit.";
    }
});
