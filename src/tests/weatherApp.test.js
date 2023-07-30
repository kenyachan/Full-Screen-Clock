const WeatherApp = require('../weatherApp');

const city = 'Sydney';

let weatherApp;

beforeEach(() => {
	weatherApp = new WeatherApp(city);
});

test('Weather app can be created with a default city', () => {
	expect(weatherApp.defaultCity).toBe(city);
});

let forecastData = {
	location : {
		country : 'Australia',
		region : 'New South Wales',
		name : city,
	},

	current : {
		temp_c : 18,
		feelslike_c : 17.5,
		humidity: 52,
		precip_mm: 15,
		uv: 1,
		is_day : 1,
		condition : {
			text : 'Mostly Sunny',
			icon : 'icon url',
		},
		"air_quality['us-epa-index']" : 1,
	},
}

let forecast = {
	locale : {
		country : 'Australia',
		region : 'New South Wales',
		name : city,
	},

	current : {
		temperature : 18,
		feelslike : 17.5,
		humidity : 52,
		precipitation : 15,
		uvIndex : 1,
		isDay : true,
		condition : {
			text : 'Mostly Sunny',
			icon : 'icon url',
		},
		aqi : 1,
	},
}

test('Get forecast will return a forecast object', async () => {
	let mockFetch = jest.fn(() => 
		Promise.resolve({
			json: () => Promise.resolve(forecastData),
		})
	);

	let fetchedForecastData = await mockFetch();
	expect(await fetchedForecastData.json()).toEqual(forecastData);

	expect(await weatherApp.getForecast(city, mockFetch)).toEqual(forecast);
});
