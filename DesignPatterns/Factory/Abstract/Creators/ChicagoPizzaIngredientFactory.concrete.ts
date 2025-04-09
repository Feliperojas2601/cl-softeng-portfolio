import { PizzaIngredientFactory } from './PizzaIngredientFactory.interface';
import { PlumTomatoSauce } from '../Products/PlumTomatoSauce.concrete';
import { MozzarellaCheese } from '../Products/MozzarellaCheese.concrete';

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    createSauce() {
        console.log('Creating Plum Tomato Sauce');
        return new PlumTomatoSauce();
    }
    createCheese() {
        console.log('Creating Mozzarella Cheese');
        return new MozzarellaCheese();
    }
}