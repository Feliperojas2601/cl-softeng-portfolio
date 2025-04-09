import { Light } from '../Receiver/Light';
import { Command } from './Command.interface';

export class LightOn implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.on();
    }

    public undo(): void {
        this.light.off();
    }
}