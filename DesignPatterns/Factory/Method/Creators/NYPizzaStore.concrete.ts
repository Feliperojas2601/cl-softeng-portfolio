import { NYStyleCheesePizza } from '../Products/NYStyleCheesePizza.concrete';
import { Pizza } from '../Products/Pizza.interface';
import { PizzaStore } from './PizzaStore.abstract';

export class NYPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza: Pizza;
        switch (type) {
            case 'cheese':
                pizza = new NYStyleCheesePizza();
                break;
            default:
                throw new Error('Unknown pizza type requested');
        }
        return pizza;
    }
}