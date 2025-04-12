import { effect, Injectable, signal } from "@angular/core";
import { Character } from '../interfaces/character.interface';

// Trabaja con inyección de dependencias, hace que sea singleton, una sola instancia de la clase en donde se use
@Injectable({
    providedIn: 'root'
})
export class DragonballService {
    loadFromLocalStorage = (): Character[] => {
        const characters = localStorage.getItem('characters');
        return characters ? JSON.parse(characters) : [];
    }

    // linked signal, se actualiza cuando se actualiza la señal
    characters = signal<Character[]>(this.loadFromLocalStorage());

    constructor(){}

    //effect es una función que se ejecuta al menos una vez, similar al ngOnInit, pero si usa una señal, se ejecuta cada vez que se actualiza la señal
    // no para peticiones http
    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    });

    onNewCharacter(character: Character) {
        // update actualizacion de señal con el valor antiguo de la señal 
        this.characters.update(characters => [...characters, character]);
    }
}
