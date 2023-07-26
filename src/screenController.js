const DAYSOFTHEWEEK = require('./modules/daysOfTheWeek');
const MONTHSOFTHEYEAR = require('./modules/monthsOfTheYear');

class ScreenController {
	weatherApp;

	/* datetime elements */
	hourElement = document.querySelector('.hours');
	minuteElement = document.querySelector('.minutes');
	secondsElement = document.querySelector('.seconds');
	dateElement = document.querySelector('#date');

	/* weather widget elements */
	cityText = document.querySelector('#cityText');
	regionText = document.querySelector('#regionText');
	countryText = document.querySelector('#countryText');
	weatherText = document.querySelector('#weatherText');
	weatherIcon = document.querySelector('#weatherIcon');

	/* misc elements */
    fullScreenWidget = document.querySelector('#fullScreen-widget');

	constructor(weatherApp) {
		this.weatherApp = weatherApp;
	}

	initialiseFullScreenButton() {
		document.querySelector('#fullscreen-button')
    		.addEventListener('click', e => 
				this.#openFullScreen(this.fullScreenWidget)
			);
	}

	initialiseFullScreenShortcut() {
		document.addEventListener('keydown', e => {
			if (e.code === 'KeyF')
				this.#openFullScreen(this.fullScreenWidget);
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
        this.hourElement.textContent = this.#addLeadingZero(dateTime.getHours());
        this.minuteElement.textContent = this.#addLeadingZero(dateTime.getMinutes());
        this.secondsElement.textContent = this.#addLeadingZero(dateTime.getSeconds());
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
    
        this.dateElement.textContent = `${DAYSOFTHEWEEK[dayOfTheWeek]}, ${day} ${MONTHSOFTHEYEAR[month]} ${year}`;
	}

	/* weather */
	async updateWeatherWidget(city) {
	    let forecast = await this.weatherApp.getForecast(city);
                
        this.#updateWeatherText(forecast);
        this.#updateLocationText(forecast);
        this.#updateWeatherIcon(forecast);
	}

	#updateLocationText(forecast) {
		this.cityText.textContent = forecast.locale.name;
        this.regionText.textContent = forecast.locale.region;
        this.countryText.textContent = forecast.locale.country;
	}

	#updateWeatherText(forecast) {
        this.weatherText.textContent = 
        `${forecast.current.temperature}\u00B0 ${forecast.current.condition.text}`;
	}

	#updateWeatherIcon(forecast) {
		this.weatherIcon.src = forecast.current.condition.icon;
	}
}

module.exports = ScreenController;
