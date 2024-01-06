const time = document.querySelector('#time');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const minute = document.querySelector('#minute');
const hour = document.querySelector('#hour');
const second = document.querySelector('#sec');
let seconds = 0;
let minutes = 0;
let hours = 0;

let intervalId; // Store interval ID to clear it later

let counter = () => {
    intervalId = setInterval(() => {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        if (hours < 0) {
            clearInterval(intervalId);
            displayError('Timer reached 0');
            return;
        }
        second.innerHTML = seconds;
        minute.innerHTML = minutes;
        hour.innerHTML = hours;

    }, 1000);
};

start.addEventListener('click', () => {
    counter();
    console.log('started');
});

// Add event listeners for stop and reset buttons
// ...
stop.addEventListener('click', () => {
clearInterval(intervalId);
})
reset.addEventListener('click', () => {
clearInterval(intervalId);
seconds = 0;
minutes = 0;
hours = 0;
second.innerHTML = '00';
minute.innerHTML = '00';
hour.innerHTML = '00';
console.log('reset');
})
// To stop the interval when needed
// clearInterval(intervalId);
