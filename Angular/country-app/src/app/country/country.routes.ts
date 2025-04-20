import { Routes } from "@angular/router";
import { ByCapitalPageComponent } from './pages/byCapital/byCapitalPage.component';
import { CountryLayoutComponent } from './layouts/country/countryLayout.component';

export const countryRoutes: Routes = [
    {
        // El path principal country carga el layout, que envuelve las rutas hijas y las muestra en su router-outlet
        // Carga por defecto la ruta by-capital con la redirección
        path: '',
        component: CountryLayoutComponent,
        children: [
            {
                path: 'by-capital', 
                component: ByCapitalPageComponent, 
            }, 
            {
                path: '**', 
                redirectTo: 'by-capital',
            }
        ]
    }, 
]