import { Light } from '../Receiver/Light';
import { Command } from './Command.interface';

export class LightOff implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.off();
    }

    public undo(): void {
        this.light.on();
    }
}