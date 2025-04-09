import { ChicagoStyleCheesePizza } from '../Products/ChicagoStyleCheesePizza.concrete';
import { Pizza } from '../Products/Pizza.interface';
import { PizzaStore } from './PizzaStore.abstract';
import { ChicagoPizzaIngredientFactory } from './ChicagoPizzaIngredientFactory.concrete';

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        const pizzaIngredientFactory = new ChicagoPizzaIngredientFactory();
        let pizza: Pizza;
        switch (type) {
            case 'cheese':
                pizza = new ChicagoStyleCheesePizza(pizzaIngredientFactory);
                break;
            default:
                throw new Error('Unknown pizza type requested');
        }
        return pizza;
    }
}