import { DinerMenu } from './Aggregate/DinerMenu';
import { PancakeMenu } from './Aggregate/PancakeMenu';
import { Waitress } from './Client/Waitress';

const pancakeMenu = new PancakeMenu();
const dinerMenu = new DinerMenu();
const waitress = new Waitress(pancakeMenu, dinerMenu);
waitress.printMenu();