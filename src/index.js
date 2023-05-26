import './css/style.css';
import './css/footer.css';
import './css/weather.css';
import './css/dateTime.css';
import { weatherApp } from './weatherApp';
import { screenController } from './screenController';

const app = weatherApp()
let sc = screenController(app);