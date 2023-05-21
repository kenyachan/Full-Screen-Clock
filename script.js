const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const fullScreenButton = document.querySelector('#fullscreen-button');
const body = document.querySelector('main');

fullScreenButton.addEventListener('click', e => openFullscreen(body));

function openFullscreen(element) {
    if (element.requestFullscreen)
        element.requestFullscreen();
    else if(element.webkitRequestFullscreen)
        element.webkitRequestFullscreen;
}

function updateTime() {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();

    minute = addLeadingZero(minute);
    seconds = addLeadingZero(seconds);

    let hourElement = document.querySelector('.hours');
    let minuteElement = document.querySelector('.minutes');
    let secondsElement = document.querySelector('.seconds');

    hourElement.textContent = hour;
    minuteElement.textContent = minute;
    secondsElement.textContent = seconds;
}

function addLeadingZero(time) {
    return time < 10 ? `0${time}` : time;
}

function updateDate() {
    const today = new Date();

    let dayOfTheWeek = today.getDay();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    let dateElement = document.querySelector('#date');
    
    dateElement.textContent = `${daysOfTheWeek[dayOfTheWeek]}, ${day} ${monthsOfTheYear[month]} ${year}`;
}

updateDate();
updateTime();
setInterval(updateDate, 1000);
setInterval(updateTime, 1000);
