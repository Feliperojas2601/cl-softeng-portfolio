import { FlyWithWings } from '../FlyBehavior/FlyWithWings';
import { Quack } from '../QuackBehavior/Quack';
import { Duck } from './Duck';

export class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }
}