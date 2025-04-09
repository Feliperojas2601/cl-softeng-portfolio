import { Duck } from '../Duck/Duck.interface';
import { Turkey } from '../Turkey/Turkey.interface';

export class TurkeyToDuck implements Duck {
    private turkey: Turkey;

    constructor(turkey: Turkey) {
        this.turkey = turkey;
    }

    public quack(): void {
        this.turkey.gobble();
    }

    public fly(): void {
        for (let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }
}