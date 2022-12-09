let clockApp = () => {
    const hoursDisplay = document.querySelector("#hours");
    const minutesDisplay = document.querySelector("#minutes");
    const secondsDisplay = document.querySelector("#seconds");
    const meridiemDisplay = document.querySelector("#meridiem");

    function twelveHourFormatTime() {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        if (hours > 12) {
            hoursDisplay.textContent = hours - 12;
            meridiemDisplay.textContent = "PM";
        }
        else {
            hoursDisplay.textContent = hours;
            meridiemDisplay.textContent = "AM";
        }
        minutesDisplay.textContent = minutes;
        secondsDisplay.textContent = seconds;

    }
    setInterval(twelveHourFormatTime, 1000);
}
clockApp();