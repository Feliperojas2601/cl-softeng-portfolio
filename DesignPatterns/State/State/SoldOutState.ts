import { GumballMachine } from '../Context/GumbalMachine';
import { State } from './State.interface';

export class SoldOutState implements State  {
    public gumballMachine: GumballMachine; 
    
    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter(): void {
        console.log('Sorry, the machine is sold out');
    }

    ejectQuarter(): void {
        console.log('You can\'t eject, you haven\'t inserted a quarter yet');
    }

    turnCrank(): void {
        console.log('You turned, but there are no gumballs');
    }

    dispense(): void {
        console.log('No gumball dispensed');
    }
}