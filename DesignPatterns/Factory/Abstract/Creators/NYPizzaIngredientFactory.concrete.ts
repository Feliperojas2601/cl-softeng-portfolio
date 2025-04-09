import { PizzaIngredientFactory } from './PizzaIngredientFactory.interface';
import { MarinaraSauce } from '../Products/MarinaraSauce.concrete';
import { ReggianoCheese } from '../Products/ReggianoCheese.concrete';

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    createSauce() {
        console.log('Creating Marinara Sauce');
        return new MarinaraSauce();
    }
    createCheese() {
        console.log('Creating Reggiano Cheese');
        return new ReggianoCheese();
    }
}