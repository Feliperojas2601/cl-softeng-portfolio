import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class DragonballCharacterAddComponent { 
    name = signal('');
    power = signal(0);
    // output es para emitir un evento al padre
    newCharacter = output<Character>();
    addCharacter() {
        if (!this.name() || !this.power() || this.power() < 0) return;
        const newCharacter: Character = {
            id: Math.floor(Math.random() * 1000),
            name: this.name(),
            power: this.power()
        }
        // emitir el evento al padre
        // subscribe es para suscribirse a todos los cambios que se produzcan en el evento
        this.newCharacter.emit(newCharacter);
        this.reset();
    }

    reset() {
        this.name.set('');
        this.power.set(0);
    }
}
