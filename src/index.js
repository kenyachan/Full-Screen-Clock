import './css/style.css';
import './css/footer.css';
import './css/weather.css';
import './css/dateTime.css';
import { screenController } from './screenController';

const WeatherApp = require('./weatherApp');

const app = new WeatherApp();
let sc = screenController(app);
