// Pages -> Componentes que ocupan toda la pantalla

import { Component } from "@angular/core";

@Component({
    templateUrl: './counterPage.component.html',  // Ruta del archivo HTML que se usará en el componente
    styleUrls: ['./counterPage.component.css'] 
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