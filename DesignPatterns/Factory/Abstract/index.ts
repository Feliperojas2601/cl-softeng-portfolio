import { ChicagoPizzaStore } from './Creators/ChicagoPizzaStore.concrete';
import { NYPizzaStore } from './Creators/NYPizzaStore.concrete';
import { PizzaStore } from './Creators/PizzaStore.abstract';

const nyStore: PizzaStore = new NYPizzaStore();
const chicagoStore: PizzaStore = new ChicagoPizzaStore();

nyStore.orderPizza("cheese");
chicagoStore.orderPizza("cheese");
