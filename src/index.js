import './css/style.css';
import './css/footer.css';
// import './css/dateWeather.css';
import './css/weather.css';
// import './css/dateTime.css';
import './css/date.css';
import './css/time.css';
import { weatherApp } from './weatherApp';
import { screenController } from './screenController';

const app = weatherApp()
let sc = screenController(app);