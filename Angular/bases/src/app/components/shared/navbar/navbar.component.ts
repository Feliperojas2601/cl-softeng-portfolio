import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Routerlink Directiva en angular para enlaces de navegación
// RouterLinkActive es una directiva en angular para enlaces de navegación que se activa cuando el enlace está activo

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    // Generado con ng g c components/shared/navbar
}
