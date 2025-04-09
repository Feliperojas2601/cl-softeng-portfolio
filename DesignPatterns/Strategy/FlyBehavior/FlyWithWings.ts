import { FlyBehavior } from './flyBehavior.interface';

export class FlyWithWings implements FlyBehavior {
    fly(): void {
        console.log('I\'m flying!!');
    }
}