import { Menu } from './Menu.interface';

export class PancakeMenu implements Menu {
    private menuItems: Map<string, string>;

    constructor() {
        this.menuItems = new Map();
        this.menuItems.set('K&B Pancake Breakfast', 'Pancakes with scrambled eggs, and toast');
        this.menuItems.set('Regular Pancake Breakfast', 'Pancakes with fried eggs, sausage');
        this.menuItems.set('Blueberry Pancakes', 'Pancakes made with fresh blueberries');
        this.menuItems.set('Waffles', 'Waffles with your choice of blueberries or strawberries');
    }

    public createIterator(): Iterator<string> {
        return this.menuItems.keys();
    }
}