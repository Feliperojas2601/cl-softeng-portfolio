import { Beverage } from '../Abstract/Beverage';

export class Coffee extends Beverage {
    public brew(): void {
        console.log('Dripping Coffee through filter');
    }

    public addCondiments(): void {
        console.log('Adding Sugar and Milk');
    }
}