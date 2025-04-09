import { ChicagoStyleCheesePizza } from '../Products/ChicagoStyleCheesePizza.concrete';
import { Pizza } from '../Products/Pizza.interface';
import { PizzaStore } from './PizzaStore.abstract';

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza: Pizza;
        switch (type) {
            case 'cheese':
                pizza = new ChicagoStyleCheesePizza();
                break;
            default:
                throw new Error('Unknown pizza type requested');
        }
        return pizza;
    }
}