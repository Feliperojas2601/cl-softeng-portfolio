import { Command } from '../Commands/Command.interface';
import { NoCommand } from '../Commands/NoCommand';

export class RemoteControl {
    private onCommands: Command[];
    private offCommands: Command[];
    private undoCommand: Command;

    constructor() {
        this.onCommands = new Array(7);
        this.offCommands = new Array(7);

        const noCommand = new NoCommand();
        for (let i = 0; i < 7; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }
        this.undoCommand = noCommand;
    }

    public setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    public onButtonWasPushed(slot: number): void {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    }

    public offButtonWasPushed(slot: number): void {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    }

    public undoButtonWasPushed(): void {
        this.undoCommand.undo();
    }

    public toString(): string {
        let result = '\n------ Remote Control -------\n';
        for (let i = 0; i < this.onCommands.length; i++) {
            result += `[slot ${i}] ${this.onCommands[i].constructor.name} ${this.offCommands[i].constructor.name}\n`;
        }
        return result;
    }
}