// Pages -> Componentes que ocupan toda la pantalla

import { Component } from "@angular/core";

@Component({
    templateUrl: './counterPage.component.html'
})
export class CounterPageComponent {

    public counter: number = 10;

    increaseBy(value: number) {
        this.counter += value;
    }

    reset() {
        this.counter = 10;
    }

    decreaseBy(value: number) {
        this.counter -= value;
    }
    
}