import { Subject } from '../Subject/Subject.interface';
import { Observer } from './Observer.interface';
import { Display } from '../Display/Display.interface';

export class CurrentConditionsDisplay implements Observer, Display {
  private temperature: number;
  private humidity: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.temperature = 0;
    this.humidity = 0;
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(): void {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.display();
  }

  display(): void {
    console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
  }
}