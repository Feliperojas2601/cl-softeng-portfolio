import { GumballMachine } from '../Context/GumbalMachine';
import { State } from './State.interface';

export class HasQuarterState implements State {
    public gumballMachine: GumballMachine; 

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter(): void {
        console.log('You can\'t insert another quarter');
    }

    ejectQuarter(): void {
        console.log('Quarter returned');
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }

    turnCrank(): void {
        console.log('You turned...');
        const randomWinner = Math.floor(Math.random() * 10);
        if (randomWinner === 0 && this.gumballMachine.getCount() > 1) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        } else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    }

    dispense(): void {
        console.log('No gumball dispensed');
    }
}