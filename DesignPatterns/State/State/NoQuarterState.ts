import { GumballMachine } from '../Context/GumbalMachine';
import { State } from './State.interface';

export class NoQuarterState implements State {
    public gumballMachine: GumballMachine; 
    
    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter(): void {
        console.log('You inserted a quarter');
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
    }

    ejectQuarter(): void {
        console.log('You haven\'t inserted a quarter');
    }

    turnCrank(): void {
        console.log('You turned, but there is no quarter');
    }

    dispense(): void {
        console.log('You need to pay first');
    }
}