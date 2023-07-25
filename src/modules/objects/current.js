const Condition = require('./condition');

class Current {
	currentWeatherData;

	constructor(currentWeatherData) {
		this.currentWeatherData = currentWeatherData;
	}

	get temperature() {
		return this.currentWeatherData.temp_c;
	}

	get feelsLike() {
		return this.currentWeatherData.feelslike_c;
	}

	get humidity() {
		return this.currentWeatherData.humidity;
	}

	get precipitation() {
		return this.currentWeatherData.precip_mm;
	}

	get uvIndex() {
		return this.currentWeatherData.uv;
	}

	get isDay() {
		return this.currentWeatherData.is_day === 1 ? true : false;
	}

	get condition() {
		return new Condition(this.currentWeatherData.condition);
	}

	get aqi() {
		return this.currentWeatherData.air_quality['us-epa-index'];
	}
}

module.exports = Current;
