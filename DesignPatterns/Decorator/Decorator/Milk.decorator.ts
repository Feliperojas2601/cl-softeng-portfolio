import { Beverage } from '../Component/Beverage.component';
import { CondimentDecorator } from './Condiment.decorator';

export class Milk extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
        this.beverage = beverage;
    }

    cost(): number {
        return this.beverage.cost() + .10;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Milk';
    }
}