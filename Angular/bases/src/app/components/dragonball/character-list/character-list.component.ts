import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
})
export class DragonballCharacterListComponent { 
    // input es la nueva forma de recibir datos desde el padre, .required es para que sea obligatorio el pase de datos en el padre
    characters = input.required<Character[]>();
    listName = input.required<string>();
}
