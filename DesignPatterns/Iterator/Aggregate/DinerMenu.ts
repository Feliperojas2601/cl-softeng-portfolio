import { Menu } from './Menu.interface';

export class DinerMenu implements Menu {
    private menuItems: string[];
    private numberOfItems: number = 0;
    private static MAX_ITEMS: number = 6;

    constructor() {
        this.menuItems = new Array(DinerMenu.MAX_ITEMS);

        this.addItem('Vegetarian BLT', 'Bacon with lettuce & tomato on whole wheat', true, 2.99);
        this.addItem('BLT', 'Bacon with lettuce & tomato on whole wheat', false, 2.99);
        this.addItem('Soup of the day', 'Soup of the day, with a side of potato salad', false, 3.29);
        this.addItem('Hotdog', 'A hot dog, with saurkraut, relish, onions, topped with cheese', false, 3.05);
        this.addItem('Steamed Veggies and Brown Rice', 'Steamed vegetables over brown rice', true, 3.99);
        this.addItem('Pasta', 'Spaghetti with Marinara Sauce, and a slice of sourdough bread', true, 3.89);
    }

    public createIterator(): Iterator<string> {
        return this.menuItems.values();
    }

    private addItem(name: string, description: string, vegetarian: boolean, price: number): void {
        const menuItem = `${name}, ${description}, ${price}, ${vegetarian ? 'Veggie' : 'Non-Veggie'}`;
        if (this.numberOfItems >= DinerMenu.MAX_ITEMS) {
            console.error('Sorry, menu is full! Can\'t add item to menu');
        } else {
            this.menuItems[this.numberOfItems] = menuItem;
            this.numberOfItems++;
        }
    }
}