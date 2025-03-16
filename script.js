window.onload = () => {
    document.querySelector('#start').onclick = startCountdown;
    document.querySelector('#reset').onclick = resetCountdown;
}

let interval;

function startCountdown() {
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    if (!date || !time) {
        alert("Please enter both date and time!");
        return;
    }

    const stopButton = document.querySelector('#stop');
    const endTime = new Date(date + " " + time);

    clearInterval(interval);
    interval = setInterval(() => updateCountdown(endTime), 1000);

    stopButton.addEventListener('click', () => clearInterval(interval));
}

function updateCountdown(endTime) {
    const currentTime = new Date();
    const timeLeft = (endTime - currentTime) / 1000;

    const days = document.querySelector("#countdown-days");
    const hours = document.querySelector("#countdown-hours");
    const minutes = document.querySelector("#countdown-minutes");
    const seconds = document.querySelector("#countdown-seconds");

    if (timeLeft > 0) {
        days.innerText = Math.floor(timeLeft / (24 * 60 * 60)).toString().padStart(2, '0');
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24).toString().padStart(2, '0');
        minutes.innerText = Math.floor((timeLeft / 60) % 60).toString().padStart(2, '0');
        seconds.innerText = Math.floor(timeLeft % 60).toString().padStart(2, '0');
    } else {
        clearInterval(interval);
        days.innerText = "00";
        hours.innerText = "00";
        minutes.innerText = "00";
        seconds.innerText = "00";
    }
}

function resetCountdown() {
    clearInterval(interval);
    document.querySelector("#countdown-days").innerText = "00";
    document.querySelector("#countdown-hours").innerText = "00";
    document.querySelector("#countdown-minutes").innerText = "00";
    document.querySelector("#countdown-seconds").innerText = "00";
}
