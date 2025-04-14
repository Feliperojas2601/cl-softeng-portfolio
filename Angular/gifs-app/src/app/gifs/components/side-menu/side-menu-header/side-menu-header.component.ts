import { Component } from '@angular/core';
// Se importa el de producción, el de desarrollo hace el cambio de manera dinamica
//import { environment } from '../../../../../environments/environment';
// Configuremos uun path alias en ts.config
/* 
"baseUrl": ".",
"paths": {
    "@environments/*": ["src/environments/*"]
},
*/
import { environment } from '@environments/environment';

@Component({
  selector: 'gifs-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.component.html',
})
export class SideMenuHeaderComponent {
    envs = environment;
}
