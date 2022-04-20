let now = new Date();
let timerTime;

//Gets a sting of zero to insert before timer numbers is they are < 10
const getZeros = (number) => {
    if (number < 10) {
        return "0"
    } else {
        return ""
    }
};

//updates Clock and timer every 1 second
setInterval(() => {
    now = new Date();
    document.querySelector('.time').innerText = `Time: ${now.toLocaleTimeString()}`;
    let timer = Math.floor((now - timerTime) / 1000);

    //Prevents updating timer field before timer is set
    if (timerTime != undefined) {
        let hours = Math.floor(timer / 3600);
        let minutes = Math.floor(timer / 60 - (hours * 60));
        let seconds = timer - (minutes * 60);
        document.querySelector('.timer').innerText = `Timer: ${getZeros(hours)}${hours}:${getZeros(minutes)}${minutes}:${getZeros(seconds)}${seconds}`;
    }
}, 1000);

//Starts timer on click event
document.querySelector('.divTwo').addEventListener('click', (e) => {
    timerTime = new Date();
    document.querySelector('.startTime').innerText = `Start Time: ${timerTime.toLocaleTimeString()}`;
});

//sets pointer over divTwo
document.querySelector('.divTwo').style.cursor = "pointer";

