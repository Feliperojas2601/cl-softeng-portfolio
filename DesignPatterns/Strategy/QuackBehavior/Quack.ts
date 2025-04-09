import { QuackBehavior } from './quackBehavior.interface';

export class Quack implements QuackBehavior {
    quack(): void {
        console.log('Quack');
    }
}