import { Turkey } from './Turkey.interface';

export class XTurkey implements Turkey {
    public gobble(): void {
        console.log('Gobble gobble');
    }

    public fly(): void {
        console.log('I am flying a short distance');
    }
}