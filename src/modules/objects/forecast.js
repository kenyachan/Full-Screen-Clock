const Locale = require('./locale');
const Current = require('./current');

class Forecast {
	forecastData;

	constructor(forecastData) {
		this.forecastData = forecastData;
	}

	get locale() {
		return new Locale(this.forecastData.location);
	}

	get current() {
		return new Current(this.forecastData.current);
	}
}

module.exports = Forecast;
