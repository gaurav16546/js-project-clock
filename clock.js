

let clockApp = () => {
    const hoursDisplay = document.querySelector("#hours");
    const minutesDisplay = document.querySelector("#minutes");
    const secondsDisplay = document.querySelector("#seconds");
    const timeDisplay = document.querySelector(".time");

    function currentTime() {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        hoursDisplay.textContent = hours;
        minutesDisplay.textContent = minutes;
        secondsDisplay.textContent = seconds;

    }
    setInterval(currentTime, 1000);
}
clockApp();