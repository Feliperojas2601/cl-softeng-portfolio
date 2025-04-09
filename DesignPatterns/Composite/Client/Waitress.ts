import { MenuComponent } from '../Component/MenuComponent';

export class Waitress   {
    private allMenus: MenuComponent;

    constructor(allMenus: MenuComponent) {
        this.allMenus = allMenus;
    }

    public printMenu(): void {
        this.allMenus.print();
    }
}