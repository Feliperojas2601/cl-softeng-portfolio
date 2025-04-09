import { FlyBehavior } from '../FlyBehavior/flyBehavior.interface';
import { QuackBehavior } from '../QuackBehavior/quackBehavior.interface';

export class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }

    performFly(): void {
        this.flyBehavior.fly();
    }

    performQuack(): void {
        this.quackBehavior.quack();
    }

    swim(): void {
        console.log('All ducks float, even decoys!');
    }

    setQuackBehavior(quackBehavior: QuackBehavior): void {
        this.quackBehavior = quackBehavior;
    }

    setFlyBehavior(flyBehavior: FlyBehavior): void {
        this.flyBehavior = flyBehavior;
    }
}