const fullScreenButton = document.querySelector('#fullscreen-button');
const body = document.querySelector('main');

fullScreenButton.addEventListener('click', e => openFullscreen(body));

function openFullscreen(element) {
    if (element.requestFullscreen)
        element.requestFullscreen();
    else if(element.webkitRequestFullscreen)
        element.webkitRequestFullscreen;
}

startTime();

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    let hourElement = document.querySelector('.hours');
    let minuteElement = document.querySelector('.minutes');
    let secondsElement = document.querySelector('.seconds');

    hourElement.textContent = h;
    minuteElement.textContent = m;
    secondsElement.textContent = s;

    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;    // add zero in front of numbers < 10
    }

    return i;
}