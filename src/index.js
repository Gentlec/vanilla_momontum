const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

let hoursValue = 0;

function getTime(){
    const date = new Date();
    const hours = date.getHours(),
        minutes = date.getMinutes();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}`: minutes}`;
    return hoursValue = hours;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();