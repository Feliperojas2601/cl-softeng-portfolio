import { NYStyleCheesePizza } from '../Products/NYStyleCheesePizza.concrete';
import { Pizza } from '../Products/Pizza.interface';
import { NYPizzaIngredientFactory } from './NYPizzaIngredientFactory.concrete';
import { PizzaStore } from './PizzaStore.abstract';

export class NYPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        const pizzaIngredientFactory = new NYPizzaIngredientFactory();
        let pizza: Pizza;
        switch (type) {
            case 'cheese':
                pizza = new NYStyleCheesePizza(pizzaIngredientFactory);
                break;
            default:
                throw new Error('Unknown pizza type requested');
        }
        return pizza;
    }
}