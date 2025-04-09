import { MenuComponent } from '../Component/MenuComponent';

export class MenuItem extends MenuComponent {
    private name: string;
    private description: string;
    private vegetarian: boolean;
    private price: number;

    constructor(name: string, description: string, vegetarian: boolean, price: number) {
        super();
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPrice(): number {
        return this.price;
    }

    public isVegetarian(): boolean {
        return this.vegetarian;
    }

    public print(): void {
        console.log(` ${this.getName()}`);
        if (this.isVegetarian()) {
            console.log('(v)');
        }
        console.log(`, ${this.getPrice()}`);
        console.log(`    -- ${this.getDescription()}`);
    }
}