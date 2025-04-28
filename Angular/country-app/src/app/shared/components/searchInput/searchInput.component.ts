import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './searchInput.component.html',
})
export class SearchInputComponent {
    placeholder = input.required<string>();
    searchOutput = output<string>();

    // señal con lo último escrito 
    inputValue = signal('');

    // efecto que se ejecuta cuando cambia el valor de la señal inputValue
    debounceEffect = effect((onCleanup) => {
        const value = this.inputValue();
        if (value.length === 0) return;
        // timeout que se ejecuta después de 500ms
        const timeout = setTimeout(() => {
            this.searchOutput.emit(value);
        }, 500);
        // limpiar el timeout cuando el componente se destruye o cuando el efecto se vuelve a ejecutar
        onCleanup(() => {
            clearTimeout(timeout);
        });
    });
}
