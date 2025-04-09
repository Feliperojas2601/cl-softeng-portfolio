import { Sauce } from '../Products/Sauce.interface';
import { Cheese } from '../Products/Cheese.interface';

export interface PizzaIngredientFactory {
    createSauce(): Sauce;
    createCheese(): Cheese;
}