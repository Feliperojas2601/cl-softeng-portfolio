import { Component, input, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class DragonballCharacterAddComponent { 
    name = signal('');
    power = signal(0);

    addCharacter() {
        if (!this.name() || !this.power() || this.power() < 0) return;
        const newCharacter: Character = {
            //id: this.characters().length + 1,
            id: 1,
            name: this.name(),
            power: this.power()
        }
        console.log(newCharacter); 
        this.reset();
    }

    reset() {
        this.name.set('');
        this.power.set(0);
    }
}
