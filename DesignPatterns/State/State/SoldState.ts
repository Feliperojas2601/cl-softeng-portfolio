import { GumballMachine } from '../Context/GumbalMachine';
import { State } from './State.interface';

export class SoldState implements State {
    public gumballMachine: GumballMachine; 
    
    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    
    insertQuarter(): void {
        console.log('Please wait, we are already giving you a gumball');
    }

    ejectQuarter(): void {
        console.log('Sorry, you already turned the crank');
    }

    turnCrank(): void {
        console.log('Turning twice does not get you another gumball!');
    }

    dispense(): void {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() > 0) {
            this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
        } else {
            console.log('Oops, out of gumballs!');
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
    }
}