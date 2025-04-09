import { MenuComponent } from '../Component/MenuComponent';

export class Menu extends MenuComponent {
    private menuComponents: MenuComponent[] = [];
    private name: string;
    private description: string;

    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
    }

    public add(menuComponent: MenuComponent): void {
        this.menuComponents.push(menuComponent);
    }

    public remove(menuComponent: MenuComponent): void {
        const index = this.menuComponents.indexOf(menuComponent);
        if (index >= 0) {
            this.menuComponents.splice(index, 1);
        }
    }

    public getChild(i: number): MenuComponent {
        return this.menuComponents[i];
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public print(): void {
        console.log(` ${this.getName()}`);
        console.log(`, ${this.getDescription()}`);
        console.log('---------------------');

        const iterator = this.menuComponents[Symbol.iterator]();
        for (const menuComponent of iterator) {
            menuComponent.print();
        }
    }
}