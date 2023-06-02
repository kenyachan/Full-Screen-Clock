const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const screenController = (weatherApp) => {
    const fullScreenWidget = document.querySelector('#fullScreen-widget');
    let time = new Date();
    let city = 'Sydney';

    initialiseFullScreenButton();
    initialiseSearchBar();
	initClickWeatherUpdate();
    updateDate();
    updateClock();
    updateWeatherWidget(city);
    setInterval(updateDate, 1000);
    setInterval(updateClock, 1000);
    setInterval(async () => {
        await updateWeatherWidget(city)
    }, 1800000);

    function initialiseFullScreenButton() {
        document.querySelector('#fullscreen-button')
    .addEventListener('click', e => openFullScreen(fullScreenWidget));
    }

    function openFullScreen(element) {
        if (element.requestFullscreen)
            element.requestFullscreen();
        else if(element.webkitRequestFullscreen)
            element.webkitRequestFullscreen;
    }

    function updateDateTime() {
        time = new Date();
    }

    function addLeadingZero(time) {
        return time < 10 || time === 0 ? `0${time}` : time;
    }

    function updateClock() {
        updateDateTime();

        let hourElement = document.querySelector('.hours');
        let minuteElement = document.querySelector('.minutes');
        let secondsElement = document.querySelector('.seconds');

        hourElement.textContent = addLeadingZero(time.getHours());
        minuteElement.textContent = addLeadingZero(time.getMinutes());
        secondsElement.textContent = addLeadingZero(time.getSeconds());
    }

    function updateDate() {
        updateDateTime();
    
        let dayOfTheWeek = time.getDay();
        let day = time.getDate();
        let month = time.getMonth();
        let year = time.getFullYear();
    
        let dateElement = document.querySelector('#date');
        
        dateElement.textContent = `${daysOfTheWeek[dayOfTheWeek]}, ${day} ${monthsOfTheYear[month]} ${year}`;
    }

    async function updateWeatherWidget(city) {
        let forecast = await weatherApp.getForecast(city);
                
        updateWeatherText(forecast);
        updateLocationText(forecast);
        updateWeatherIcon(forecast);
    }

    function updateLocationText(forecast) {
        let cityText = document.querySelector('#cityText');
        let regionText = document.querySelector('#regionText');
        let countryText = document.querySelector('#countryText');

        cityText.textContent = forecast.locale.name;
        regionText.textContent = forecast.locale.region;
        countryText.textContent = forecast.locale.country;
    }

	function initClickWeatherUpdate() {
		let weatherWidget = document.querySelector('#weather-widget');
		console.log('hm');
		weatherWidget.addEventListener('click', e => {
			updateWeatherWidget(city);
		});
	}

    function updateWeatherText(forecast) {
        let weatherText = document.querySelector('#weatherText');

        weatherText.textContent = 
        `${forecast.current.temperature}\u00B0 ${forecast.current.condition.text}`;
    }

    function updateWeatherIcon(forecast) {
        let weatherIcon = document.querySelector('#weatherIcon');

        weatherIcon.src = forecast.current.condition.icon;
    }

    function initialiseSearchBar() {
        const searchBar = document.querySelector('input[type="search"');

        searchBar.addEventListener('search', async (e) => {
            city = searchBar.value;

            updateWeatherWidget(city);
        });

        searchBar.addEventListener('focusout', e => searchBar.value = '');
    }
}
