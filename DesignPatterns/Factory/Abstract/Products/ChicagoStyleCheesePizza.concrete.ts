import { PizzaIngredientFactory } from '../Creators/PizzaIngredientFactory.interface';
import { Cheese } from './Cheese.interface';
import { Pizza } from './Pizza.interface';
import { Sauce } from './Sauce.interface';

export class ChicagoStyleCheesePizza implements Pizza {
    public sauce: Sauce;
    public cheese: Cheese;
    public pizzaIngredientFactory: PizzaIngredientFactory

    constructor(pizzaIngredientFactory: PizzaIngredientFactory) {
        this.pizzaIngredientFactory = pizzaIngredientFactory;
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.cheese = this.pizzaIngredientFactory.createCheese();
    }

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