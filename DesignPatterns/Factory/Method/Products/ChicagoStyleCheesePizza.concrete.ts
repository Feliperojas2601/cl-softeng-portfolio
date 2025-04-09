import { Pizza } from './Pizza.interface';

export class ChicagoStyleCheesePizza implements Pizza {
    prepare(): void {
        console.log('Preparing Chicago Style Cheese Pizza');
    }
    bake(): void {
        console.log('Baking Chicago Style Cheese Pizza');
    }
    cut(): void {
        console.log('Cutting Chicago Style Cheese Pizza');
    }
    box(): void {
        console.log('Boxing Chicago Style Cheese Pizza');
    }
    log(): void {
        console.log('Chicago Style Cheese Pizza');
    }
}