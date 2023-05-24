import { condition as newCondition } from './condition';

export const current = (currentWeatherData) => {
	return {
		get temperature() {
			return currentWeatherData.temp_c;
		},

		get feelslike() {
			return currentWeatherData.feelslike_c;
		},

		get humidity() {
			return currentWeatherData.humidity;
		},

		get precipitation() {
			return currentWeatherData.precip_mm;
		},

		get uvIndex() {
			return currentWeatherData.uv;
		},

		get isDay() {
			return currentWeatherData.is_day === 1 ? true : false;
		},

		get condition() {
			return newCondition(currentWeatherData.condition);
		},

		get aqi() {
			return currentWeatherData.air_quality['us-epa-index'];
		},
	}
}
