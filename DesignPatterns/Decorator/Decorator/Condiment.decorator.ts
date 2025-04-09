import { Beverage } from '../Component/Beverage.component';

export abstract class CondimentDecorator extends Beverage {
    public beverage: Beverage;
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }
    abstract getDescription(): string;
    abstract cost(): number;
}