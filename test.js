document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('timerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        startTimer();
    });

    document.getElementById('notificationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        setDelayedNotification();
    });

    document.getElementById('repeatNotificationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        startRepeatNotification();
    });

    document.getElementById('stopRepeatNotification').addEventListener('click', stopRepeatNotification);

    document.getElementById('countdownForm').addEventListener('submit', function(event) {
        event.preventDefault();
        displayCountDownTimer();
    });
});

// Task 1: Countdown Timer
let timerInterval;
function startTimer() {
    const durationInput = document.getElementById('duration');
    let duration = parseInt(durationInput.value);

    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid duration in seconds.');
        return;
    }

    clearInterval(timerInterval);
    updateTimerDisplay(duration);

    timerInterval = setInterval(() => {
        duration--;
        updateTimerDisplay(duration);

        if (duration <= 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('timer').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Task 2: Delayed Notification
function setDelayedNotification() {
    const delayInput = document.getElementById('delay');
    const delay = parseInt(delayInput.value);

    if (isNaN(delay) || delay <= 0) {
        alert('Please enter a valid delay in milliseconds.');
        return;
    }

    setTimeout(() => {
        document.getElementById('notification').textContent = 'Notification: Time is up!';
    }, delay);
}

// Task 3: Repeat Notification
let repeatInterval;
function startRepeatNotification() {
    const intervalInput = document.getElementById('interval');
    const interval = parseInt(intervalInput.value);

    if (isNaN(interval) || interval <= 0) {
        alert('Please enter a valid interval in milliseconds.');
        return;
    }

    clearInterval(repeatInterval);
    repeatInterval = setInterval(() => {
        document.getElementById('repeatNotification').textContent = 'Repeat Notification: Time is up!';
    }, interval);

    document.getElementById('stopRepeatNotification').style.display = 'block';
}

function stopRepeatNotification() {
    clearInterval(repeatInterval);
    document.getElementById('repeatNotification').textContent = '';
    document.getElementById('stopRepeatNotification').style.display = 'none';
}

// Task 4: Countdown Timer with Delay
async function fetchCountDownTimer() {
    await new Promise(resolve => setTimeout(resolve, 2000));
}

async function displayCountDownTimer() {
    try {
        await fetchCountDownTimer();

        const countdownDurationInput = document.getElementById('countdownDuration');
        let duration = parseInt(countdownDurationInput.value);

        if (isNaN(duration) || duration <= 0) {
            alert('Please enter a valid countdown duration in seconds.');
            return;
        }

        clearInterval(timerInterval);
        updateCountDownTimerDisplay(duration);

        timerInterval = setInterval(() => {
            duration--;
            updateCountDownTimerDisplay(duration);

            if (duration <= 0) {
                clearInterval(timerInterval);
                alert('Countdown Timer: Time is up!');
            }
        }, 1000);
    } catch (error) {
        console.error('Error:', error);
    }
}

function updateCountDownTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('countDownTimer').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
