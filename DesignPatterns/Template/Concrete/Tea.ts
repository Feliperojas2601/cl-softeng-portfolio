import { Beverage } from '../Abstract/Beverage';

export class Tea extends Beverage {
    public brew(): void {
        console.log('Steeping the tea');
    }

    public addCondiments(): void {
        console.log('Adding Lemon');
    }
}