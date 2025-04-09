import { QuackBehavior } from './quackBehavior.interface';

export class MuteQuack implements QuackBehavior {
    quack(): void {
        console.log('<< Silence >>');
    }
}