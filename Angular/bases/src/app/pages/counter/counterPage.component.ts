// Pages -> Componentes que ocupan toda la pantalla

import { Component, signal, ChangeDetectionStrategy } from "@angular/core";

@Component({
    templateUrl: './counterPage.component.html',  // Ruta del archivo HTML que se usará en el componente
    styleUrls: ['./counterPage.component.css'], 
    /* Estrategia de detección de cambios Zoneless
    changeDetection: ChangeDetectionStrategy.OnPush // Cambia la estrategia de detección de cambios, se actualiza el valor de la signal cuando se cambia el valor de la variable que esta usando la signal
    */
})
export class CounterPageComponent {
    public counter: number = 10;
    // Signal, paradigma reactivo, se actualiza el valor de la signal y se actualiza el valor de la variable que esta usando la signal
    // SolidJS impulsó el uso de signals y Angular se ha adaptado a esta nueva forma de trabajar
    // Antes usaba ZoneJS, librería pesada (performance, debug). Ahora angular apunta ser Zoneless 
    public counterSignal = signal(10); // Writable signal de tipo number

    increaseBy(value: number) {
        this.counter += value;
        this.counterSignal.update(current => current + value); // Actualiza el valor de la signal, el parametro es una funcion que recibe el valor actual de la signal y devuelve el nuevo valor
    }

    reset() {
        this.counter = 0;
        this.counterSignal.set(0); // Setea el valor de la signal
    }

    constructor() {
        /*setInterval(() => {
            this.counter += 1; // Esto no se ve reflejado con el changeDetection: ChangeDetectionStrategy.OnPush no estamos usando ZoneJS
            this.counterSignal.update(current => current + 1); // Esto se ve reflejado con el changeDetection: ChangeDetectionStrategy.OnPush
        }, 2000);*/
    }
}