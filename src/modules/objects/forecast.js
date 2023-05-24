import { locale as newLocale } from './locale';
import { current as newCurrent } from './current';

export const forecast = (forecastData) => {
	const locale = newLocale(forecastData.location);
	const current = newCurrent(forecastData.current);

	return {
		get locale() {
			return locale;
		},

		get current() {
			return current;
		},
	}
}
