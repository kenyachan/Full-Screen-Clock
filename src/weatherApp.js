const Forecast = require('./modules/objects/forecast');

class WeatherApp {
	defaultCity = 'Sydney';

	constructor(defaultCity) {
		this.defaultCity = defaultCity;
	}

	async getForecast(city) {
		const baseUrl = 'https://api.weatherapi.com/v1';
		const forecastEndPoint = '/forecast.json';
		const apiKey = '95ce1f183f22452981d74145232304';

		const response = await fetch(`${baseUrl}${forecastEndPoint}?key=${apiKey}&q=${city || this.defaultCity}&aqi=yes`, { mode: 'cors' });
		const forecastData = await response.json();

		let forecast = new Forecast(forecastData);

		return forecast;
	}
}

module.exports = WeatherApp;
