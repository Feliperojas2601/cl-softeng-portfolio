import { Beverage } from '../Component/Beverage.component';
import { CondimentDecorator } from './Condiment.decorator';

export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Mocha';
    }

    cost(): number {
        return this.beverage.cost() + .20;
    }
}