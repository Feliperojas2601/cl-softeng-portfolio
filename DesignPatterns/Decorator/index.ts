import { Mocha } from './Decorator/Mocha.decorator';
import { Espresso } from './Component/Espresso.component';
import { Milk } from './Decorator/Milk.decorator';
import { Decaf } from './Component/Decaf.component';

console.log('Decorator Pattern'); 
const beverage = new Espresso();
console.log(beverage.getDescription() + ' $' + beverage.cost());

// Add Mocha to the beverage
console.log('Add Mocha to the beverage');
const beverageWithMocha = new Mocha(beverage);
console.log(beverageWithMocha.getDescription() + ' $' + beverageWithMocha.cost());

// Add Mocha to the beverage again
console.log('Add Mocha to the beverage again');
const beverageWithMocha2 = new Mocha(beverageWithMocha);
console.log(beverageWithMocha2.getDescription() + ' $' + beverageWithMocha2.cost());

// Possible problem with the chain of decorators
const beverage2 = new Mocha(new Milk(new Decaf())); 
console.log(beverage2.getDescription() + ' $' + beverage2.cost());