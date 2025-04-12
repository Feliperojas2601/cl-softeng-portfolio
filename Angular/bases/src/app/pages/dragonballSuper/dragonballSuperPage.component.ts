import { Component, inject } from '@angular/core';
import { DragonballCharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { Character } from '../../interfaces/character.interface';
import { DragonballCharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { DragonballService } from '../../services/dragonball.service';
@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonballSuperPage.component.html',
  styleUrl: './dragonballSuperPage.component.css', 
  imports: [DragonballCharacterAddComponent, DragonballCharacterListComponent]
})
export class DragonballSuperComponent {
    // DI tradicional
    /*constructor(private dragonballService: DragonballService){}

    onNewCharacter(character: Character) {
        this.dragonballService.onNewCharacter(character);
    }*/

    // DI con inject - recomendada ahora
    dragonballService = inject(DragonballService);
    characters = this.dragonballService.characters;
    onNewCharacter(character: Character) {
        this.dragonballService.onNewCharacter(character);
    }
}
