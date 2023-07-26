import './css/style.css';
import './css/footer.css';
import './css/weather.css';
import './css/dateTime.css';

const WeatherApp = require('./weatherApp');
const ScreenController = require('./screenController');

const weatherApp = new WeatherApp('Sydney');
const screenController = new ScreenController(weatherApp);

screenController.initialiseFullScreenButton();
screenController.initialiseFullScreenShortcut();
screenController.initialiseSearchBar();
screenController.initClickWeatherUpdate();

let date = new Date();

screenController.updateClock(date);
screenController.updateDate(date);

let city = 'Sydney';

screenController.updateWeatherWidget(city);

setInterval(() => screenController.updateClock(new Date()), 100);
setInterval(() => screenController.updateDate(new Date()), 1000);
setInterval(() => async () => {
	await screenController.updateWeatherWidget(city);
}, 1800000);
