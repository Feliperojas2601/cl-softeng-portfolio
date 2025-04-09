import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // Nombre de la etiqueta HTML que se usará en el HTML
  imports: [RouterOutlet], // Importación de RouterOutlet para que el componente pueda usar las rutas con la etiqueta <router-outlet></router-outlet>
  templateUrl: './app.component.html', // Ruta del archivo HTML que se usará en el componente
  styleUrl: './app.component.css' // Ruta del archivo CSS que se usará en el componente
  // standalone: true // Para que el componente sea su propio módulo 
})
export class AppComponent {
  title = 'Hola Mundo'; // public title: string = 'Hola Mundo'; Ya inferido por TS
}
