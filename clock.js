let clockApp = () => {
    const hoursDisplay = document.querySelector("#hours");
    const minutesDisplay = document.querySelector("#minutes");
    const secondsDisplay = document.querySelector("#seconds");
    const timeDisplay = document.querySelector(".time");
    const twelveHourFormat = document.querySelector("#twelve-hour");
    const twentyfourHourFormat = document.querySelector("#twentyfour-hour");

    function twelveHourFormatTime() {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        if (hours > 12) {
            hoursDisplay.textContent = hours - 12;
        }
        else {
            hoursDisplay.textContent = hours;
        }
        minutesDisplay.textContent = minutes;
        secondsDisplay.textContent = seconds;

    }
    twelveHourFormat.addEventListener('click', () => {
        setInterval(twelveHourFormatTime, 1000);
        twelveHourFormat.style.display = 'none';
        twentyfourHourFormat.style.display = 'flex';
    })



    function twentyFourHourFormatTime() {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        hoursDisplay.textContent = hours;
        minutesDisplay.textContent = minutes;
        secondsDisplay.textContent = seconds;

    }
    twentyfourHourFormat.addEventListener('click', () => {
        setInterval(twentyFourHourFormatTime, 1000);
        twentyfourHourFormat.style.display = 'none';
        twelveHourFormat.style.display = 'flex';
    });

}
clockApp();