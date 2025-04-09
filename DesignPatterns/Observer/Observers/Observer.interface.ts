export interface Observer {
  /* Pull method using no parameters and getter methods */
  update(): void;
  /* Push method using update with parameters */
  // update(temperature: number, humidity: number, pressure: number): void;
}