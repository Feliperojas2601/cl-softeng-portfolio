import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home/homePage.component';
export const routes: Routes = [
    {
        path: 'home', 
        component: HomePageComponent,
    }, 
    {
        path: 'country', 
        // Cargar archivo externo de rutas del country
        loadChildren: () => import('./country/country.routes').then(m => m.countryRoutes),
    },
    {
        path: '**', 
        redirectTo: 'home',
    }
];
