import { Component, computed, signal } from '@angular/core';

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonballSuperPage.component.html',
  styleUrl: './dragonballSuperPage.component.css'
})
export class DragonballSuperComponent {
    // Formulario simple con señales 
    name = signal('');
    power = signal(0);
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
    ]);

    addCharacter() {
        if (!this.name() || !this.power() || this.power() < 0) return;
        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power()
        }
        this.characters.update(characters => [...characters, newCharacter]);
        this.reset();
    }

    reset() {
        this.name.set('');
        this.power.set(0);
    }
}
