import { Command } from './Command.interface';

export class NoCommand implements Command {
    public execute(): void {
        console.log('No command');
    }

    public undo(): void {
        console.log('No command');
    }
}