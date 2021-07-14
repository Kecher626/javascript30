const secondtick = document.querySelector('.second-tick');
const minstick = document.querySelector('.min-tick');
const hourtick = document.querySelector('.hour-tick');

function setDate() {

    // make the tick rotate
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondtick.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minstick.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourtick.style.transform = `rotate(${hourDegrees}deg)`;

    document.getElementById("nowDiv").innerHTML = (hour < 10 ? '0' : '') + hour +
        ":" + (mins < 10 ? '0' : '') + mins + ":" + (seconds < 10 ? '0' : '') + seconds; // indicate time
}

setInterval(setDate, 1000);
setDate();