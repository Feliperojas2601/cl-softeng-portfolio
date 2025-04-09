import { Pizza } from './Pizza.interface';

export class NYStyleCheesePizza implements Pizza {
    prepare(): void {
        console.log('Preparing NY Style Cheese Pizza');
    }
    bake(): void {
        console.log('Baking NY Style Cheese Pizza');
    }
    cut(): void {
        console.log('Cutting NY Style Cheese Pizza');
    }
    box(): void {
        console.log('Boxing NY Style Cheese Pizza');
    }
    log(): void {
        console.log('NY Style Cheese Pizza');
    }
}