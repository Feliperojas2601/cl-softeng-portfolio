import { FlyNoWay } from '../FlyBehavior/FlyNoWay';
import { MuteQuack } from '../QuackBehavior/MuteQuack';
import { Duck } from './Duck';

export class DecoyDuck extends Duck {
    constructor() {
        super(new FlyNoWay(), new MuteQuack());
    }
}