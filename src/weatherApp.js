import { forecast as newForecast } from './modules/objects/forecast';

export function weatherApp() {
	async function getForecast(city) {
		const baseUrl = 'https://api.weatherapi.com/v1';
		const forecastEndPoint = '/forecast.json';
		const apiKey = '95ce1f183f22452981d74145232304';

		const response = await fetch(`${baseUrl}${forecastEndPoint}?key=${apiKey}&q=${city}&aqi=yes`, { mode: 'cors' });
		const forecastData = await response.json();

		let forecast = newForecast(forecastData);

		return forecast;
	}

	return {
		getForecast,
	}
}

