import { Sauce } from './Sauce.interface';
import { Cheese } from './Cheese.interface';

export abstract class Pizza {
    public sauce: Sauce;
    public cheese: Cheese;
    abstract prepare(): void;
    abstract bake(): void;
    abstract cut(): void;
    abstract box(): void;
    abstract log(): void;
}