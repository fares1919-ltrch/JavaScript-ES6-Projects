// Event listener for the submit button
document.getElementById("submitBtn").addEventListener("click", () => {
    const name = document.getElementById("myInput").value.trim();

    const greetingMessage = name 
        ? `Hello, ${name}! Have a great day! 🌟` 
        : "Hello, Guest! Please provide your name next time! 😊";

    document.getElementById("myText").textContent = greetingMessage;
});

// Add focus on the input field on page load
document.getElementById("myInput").focus();
