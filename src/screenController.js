const DAYSOFTHEWEEK = require('./modules/daysOfTheWeek');
const MONTHSOFTHEYEAR = require('./modules/monthsOfTheYear');

class ScreenController {
	weatherApp;

	constructor(weatherApp) {
		this.weatherApp = weatherApp;
	}

	initialiseFullScreenButton() {
    	const fullScreenWidget = document.querySelector('#fullScreen-widget');

		document.querySelector('#fullscreen-button')
    		.addEventListener('click', e => 
				this.#openFullScreen(fullScreenWidget)
			);
	}

	initialiseFullScreenShortcut() {
    	const fullScreenWidget = document.querySelector('#fullScreen-widget');

		document.addEventListener('keydown', e => {
			if (e.code === 'KeyF')
				this.#openFullScreen(fullScreenWidget);
		});
	}

	#openFullScreen(element) {
		if (element.requestFullscreen)
            element.requestFullscreen();
        else if(element.webkitRequestFullscreen)
            element.webkitRequestFullscreen;
	}

	initialiseSearchBar() {
		const searchBar = document.querySelector('input[type="search"');

        searchBar.addEventListener('search', async (e) => {
            let city = searchBar.value;
            this.updateWeatherWidget(city);
        });

        searchBar.addEventListener('focusout', e => searchBar.value = '');
	}

	initClickWeatherUpdate() {
		let weatherWidget = document.querySelector('#weather-widget');
		weatherWidget.addEventListener('click', e => {
			this.updateWeatherWidget();
		});
	}

	/* clock */
	updateClock(dateTime) {
		let hourElement = document.querySelector('.hours');
        let minuteElement = document.querySelector('.minutes');
        let secondsElement = document.querySelector('.seconds');

        hourElement.textContent = this.#addLeadingZero(dateTime.getHours());
        minuteElement.textContent = this.#addLeadingZero(dateTime.getMinutes());
        secondsElement.textContent = this.#addLeadingZero(dateTime.getSeconds());
	}

	#addLeadingZero(time) {
		let newTime = time < 10 || time === 0 ? `0${time}` : time;

        return newTime;
	}

	updateDate(dateTime) {
		let dayOfTheWeek = dateTime.getDay();
        let day = dateTime.getDate();
        let month = dateTime.getMonth();
        let year = dateTime.getFullYear();
    
        let dateElement = document.querySelector('#date');
        
        dateElement.textContent = `${DAYSOFTHEWEEK[dayOfTheWeek]}, ${day} ${MONTHSOFTHEYEAR[month]} ${year}`;
	}

	/* weather */
	async updateWeatherWidget(city) {
	    let forecast = await this.weatherApp.getForecast(city);
                
        this.#updateWeatherText(forecast);
        this.#updateLocationText(forecast);
        this.#updateWeatherIcon(forecast);
	}

	#updateLocationText(forecast) {
		let cityText = document.querySelector('#cityText');
        let regionText = document.querySelector('#regionText');
        let countryText = document.querySelector('#countryText');

        cityText.textContent = forecast.locale.name;
        regionText.textContent = forecast.locale.region;
        countryText.textContent = forecast.locale.country;
	}

	#updateWeatherText(forecast) {
		let weatherText = document.querySelector('#weatherText');

        weatherText.textContent = 
        `${forecast.current.temperature}\u00B0 ${forecast.current.condition.text}`;
	}

	#updateWeatherIcon(forecast) {
		let weatherIcon = document.querySelector('#weatherIcon');

		weatherIcon.src = forecast.current.condition.icon;
	}
}

module.exports = ScreenController;
