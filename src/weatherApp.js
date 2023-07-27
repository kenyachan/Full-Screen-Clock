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
		
		return this.#parseForecast(await response.json());
	}

	#parseForecast(forecastData) {
		return {
			locale : {
				country : forecastData.location.country,
				region : forecastData.location.region,
				name : forecastData.location.name
			},
			current : {
				temperature : forecastData.current.temp_c,
				feelsLike : forecastData.current.feelslike_c,
				humidity : forecastData.current.humidity,
				precipitation : forecastData.current.precip_mm,
				uvIndex : forecastData.current.uv,
				isDay : forecastData.current.is_day === 1 ? true : false,
				condition : {
					text : forecastData.current.condition.text,
					icon : forecastData.current.condition.icon
				},
				aqi : forecastData.current.air_quality['us-epa-index'],
			},
		}
	}
}

module.exports = WeatherApp;

