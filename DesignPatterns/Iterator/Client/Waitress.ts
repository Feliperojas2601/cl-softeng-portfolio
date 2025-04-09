import { Menu } from '../Aggregate/Menu.interface';

export class Waitress {
    private pancakeMenu: Menu;
    private dinerMenu: Menu;

    constructor(pancakeMenu: Menu, dinerMenu: Menu) {
        this.pancakeMenu = pancakeMenu;
        this.dinerMenu = dinerMenu;
    }

    public printMenu(): void {
        const pancakeIterator = this.pancakeMenu.createIterator();
        const dinerIterator = this.dinerMenu.createIterator();
        console.log('MENU\n----\nBREAKFAST');
        this.printMenuItems(pancakeIterator);
        console.log('\nLUNCH');
        this.printMenuItems(dinerIterator);
    }

    private printMenuItems(iterator: Iterator<string>): void {
        let result = iterator.next();
        while (!result.done) {
            console.log(result.value);
            result = iterator.next();
        }
    }
}