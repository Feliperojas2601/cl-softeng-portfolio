import { Duck } from './Duck.interface';

export class YDuck implements Duck {
    public quack(): void {
        console.log('Quack');
    }

    public fly(): void {
        console.log('I am flying');
    }
}