let clockApp = () => {
    const displayTime = document.querySelector("#time");

    function twelveHourFormatTime() {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        if (hours > 12) {
            displayTime.textContent = `${hours - 12} : ${minutes} : ${seconds}  PM`;
        }
        else {
            displayTime.textContent = `${hours} : ${minutes} : ${seconds}  AM`;
        }
    }
    setInterval(twelveHourFormatTime, 1000);
}
clockApp();