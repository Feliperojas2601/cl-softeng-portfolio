import { bootstrapApplication } from '@angular/platform-browser'; // Aplicación web de Angular
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Boostrap significa arrancar, arrancar la aplicación
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
