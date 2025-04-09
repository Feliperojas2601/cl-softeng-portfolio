import { Observer } from '../Observers/Observer.interface';

export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
  getTemperature(): number;
  getHumidity(): number;
  getPressure(): number;
}