import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [NgClass], // Importamos NgClass para usar la directiva [ngClass]
  templateUrl: './dragonballPage.component.html',
  styleUrl: './dragonballPage.component.css'
})
export class DragonballComponent {
    // Inicializamos señal de estado ([])
    characters = signal<Character[]>([
        {
            id: 1,
            name: 'Goku',
            power: 10000
        },
        {
            id: 2,
            name: 'Vegeta',
            power: 9000
        },
        {
            id: 3,
            name: 'Krilin',
            power: 8000
        },
        {
            id: 4,
            name: 'Piccolo',
            power: 7000
        }, 
        {
            id: 5,
            name: 'Yamcha',
            power: 500
        },
    ]);

    // Señal de computed para calcular la clase de poder
    powerClasses = computed(() => {
        return {
            'text-warning': true,
        }
    });
}
