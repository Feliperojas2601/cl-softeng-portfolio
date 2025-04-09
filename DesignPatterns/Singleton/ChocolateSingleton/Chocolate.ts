export class Chocolate {
    private static instance: Chocolate;

    private constructor() {}

    public static getInstance(): Chocolate {
        if (!Chocolate.instance) {
            console.log('Creating a new instance of Chocolate');
            Chocolate.instance = new Chocolate();
        } else {
            console.log('Returning the existing instance of Chocolate');
        }
        return Chocolate.instance;
    }
}