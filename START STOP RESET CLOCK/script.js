const display = document.querySelector('.display'); // Update the selector to match class instead of ID

let startTime, updatedTime, difference, tInterval;
let running = false; // Used to determine if the stopwatch is running

// DOM elements
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Event Listeners
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

// Function to start the stopwatch
function start() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startBtn.disabled = true; // Disable start button when running
    }
}

// Function to stop the stopwatch
function stop() {
    if (running) {
        clearInterval(tInterval);
        running = false;
        startBtn.disabled = false; // Enable start button when not running
    }
}

// Function to reset the stopwatch
function reset() {
    clearInterval(tInterval);
    running = false;
    display.textContent = '00:00:00:00';
    startBtn.disabled = false;
}

// Function to get the current time and show it
function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    // Calculating hours, minutes, seconds, and milliseconds
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10); // Two digits

    // Pad values to ensure two digits
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    milliseconds = milliseconds < 10 ? `0${milliseconds}` : milliseconds;

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

// Make sure to clear any intervals when you leave the page
window.onbeforeunload = function () {
    clearInterval(tInterval);
};
