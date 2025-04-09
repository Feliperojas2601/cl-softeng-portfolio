import { Display } from '../Display/Display.interface';
import { Subject } from '../Subject/Subject.interface';
import { Observer } from './Observer.interface';

export class StatisticsDisplay implements Observer, Display {
  private maxTemp: number;
  private minTemp: number;
  private tempSum: number;
  private numReadings: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.maxTemp = 0;
    this.minTemp = 200;
    this.tempSum = 0;
    this.numReadings = 0;
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(): void {
    const temperature = this.weatherData.getTemperature();
    this.tempSum += temperature;
    this.numReadings++;
    if (temperature > this.maxTemp) {
      this.maxTemp = temperature;
    }
    if (temperature < this.minTemp) {
      this.minTemp = temperature;
    }
    this.display();
  }

  display(): void {
    console.log(`Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${this.maxTemp}/${this.minTemp}`);
  }
}