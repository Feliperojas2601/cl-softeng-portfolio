import { Display } from '../Display/Display.interface';
import { Subject } from '../Subject/Subject.interface';
import { Observer } from './Observer.interface';

export class ForecastDisplay implements Observer, Display {
  private currentPressure: number;
  private lastPressure: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.currentPressure = 0;
    this.lastPressure = 0;
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = this.weatherData.getPressure();
    this.display();
  }

  display(): void {
    console.log('Forecast: ');
    if (this.currentPressure > this.lastPressure) {
      console.log('Improving weather on the way!');
    } else if (this.currentPressure === this.lastPressure) {
      console.log('More of the same');
    } else if (this.currentPressure < this.lastPressure) {
      console.log('Watch out for cooler, rainy weather');
    }
  }
}