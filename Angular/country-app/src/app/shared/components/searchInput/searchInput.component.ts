import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './searchInput.component.html',
})
export class SearchInputComponent {
    placeholder = input.required<string>();
    searchOutput = output<string>();

    search(value: string) {
        this.searchOutput.emit(value);
    }
}
