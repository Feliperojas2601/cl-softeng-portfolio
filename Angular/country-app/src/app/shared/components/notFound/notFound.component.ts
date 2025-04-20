import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './notFound.component.html',
})
export class NotFoundComponent {
    // Location para navegar hacia atrás en el historial de navegación
    location = inject(Location);
    goBack() {
        this.location.back();
    }
}
