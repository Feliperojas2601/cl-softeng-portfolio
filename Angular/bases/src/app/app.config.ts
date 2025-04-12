import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // ProvideZoneChangeDetection define la estrategia de detección de cambios
  // ProvideRouter define las rutas de la aplicación
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // HashStrategy para desplegar y tener el # en la url 
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
};
