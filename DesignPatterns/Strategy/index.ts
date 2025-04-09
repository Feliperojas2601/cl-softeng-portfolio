import { Duck } from './Duck/Duck';
import { MallardDuck } from './Duck/MallardDuck';
import { FlyNoWay } from './FlyBehavior/FlyNoWay';

console.log('Strategy Pattern');
const duck: Duck = new MallardDuck();
duck.performFly();
duck.performQuack();
console.log('Changes in biology, now the duck can not fly');
duck.setFlyBehavior(new FlyNoWay());
duck.performFly();