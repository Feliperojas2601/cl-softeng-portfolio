import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DragonballCharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonballCharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonballSuperPage.component.html',
  styleUrl: './dragonballSuperPage.component.css', 
  imports: [DragonballCharacterAddComponent, DragonballCharacterListComponent]
})
export class DragonballSuperComponent {
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
}
