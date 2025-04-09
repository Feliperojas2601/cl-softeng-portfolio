import { CurrentConditionsDisplay } from './Observers/CurrentConditionsDisplay';
import { ForecastDisplay } from './Observers/ForecastDisplay';
import { NewDisplay } from './Observers/NewDisplay';
import { StatisticsDisplay } from './Observers/StatisticsDisplay';
import { WeatherData } from './Subject/WeatherData';

const wheaterData: WeatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(wheaterData);
new StatisticsDisplay(wheaterData);
new ForecastDisplay(wheaterData);
wheaterData.setMeasurements(80, 65, 30.4);
wheaterData.setMeasurements(82, 70, 29.2);
console.log('Adding new display and removing current display');
new NewDisplay(wheaterData);
wheaterData.removeObserver(currentDisplay);
wheaterData.setMeasurements(78, 90, 29.2);