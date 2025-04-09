export abstract class Beverage {
    public prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    public boilWater(): void {
        console.log('Boiling water');
    }

    public abstract brew(): void;

    public pourInCup(): void {
        console.log('Pouring into cup');
    }

    public abstract addCondiments(): void;
}