import { TurkeyToDuck } from './Adapter/TurkeyToDuck';
import { YDuck } from './Duck/YDuck';
import { XTurkey } from './Turkey/Xturkey';

const xTurkey = new XTurkey();
xTurkey.gobble();
xTurkey.fly();

const yDuck = new YDuck();
yDuck.quack();
yDuck.fly();

const newDuck = new TurkeyToDuck(xTurkey);
newDuck.quack();
newDuck.fly();