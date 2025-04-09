import { Cheese } from './Cheese.interface';
import { Pizza } from './Pizza.interface';
import { Sauce } from './Sauce.interface';
import { PizzaIngredientFactory } from '../Creators/PizzaIngredientFactory.interface';

export class NYStyleCheesePizza implements Pizza {
    public sauce: Sauce;
    public cheese: Cheese;
    public pizzaIngredientFactory: PizzaIngredientFactory;

    constructor(pizzaIngredientFactory: PizzaIngredientFactory) {
        this.pizzaIngredientFactory = pizzaIngredientFactory;
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.cheese = this.pizzaIngredientFactory.createCheese();
    }
    
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