// Function to simulate a delay using a Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to show the first task after the game starts
function showTask1() {
    return new Promise(resolve => {
        document.getElementById('task1').style.visibility = "visible";
        resolve('Task 1 Completed');
    });
}

// Function to show the second task after waiting 2 seconds
function showTask2() {
    return delay(2000).then(() => {
        document.getElementById('task2').style.visibility = "visible";
        return 'Task 2 Completed';
    });
}

// Function to show the third task
function showTask3() {
    return delay(2000).then(() => {
        document.getElementById('task3').style.visibility = "visible";
        return 'Task 3 Completed';
    });
}

// Start game on button click
document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('statusMessage').textContent = "Game Started!";

    showTask1()
        .then(result => {
            console.log(result); // Task 1
            return showTask2();  // Proceed to Task 2
        })
        .then(result => {
            console.log(result); // Task 2
            return showTask3();  // Proceed to Task 3
        })
        .then(result => {
            console.log(result); // Task 3
            document.getElementById('statusMessage').textContent = "You Win! All tasks completed!";
        })
        .catch(error => {
            document.getElementById('statusMessage').textContent = "Something went wrong!";
            console.error(error);
        });
});
