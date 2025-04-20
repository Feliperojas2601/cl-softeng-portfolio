import { Routes } from "@angular/router";
import { ByCapitalPageComponent } from './pages/byCapital/byCapitalPage.component';
import { CountryLayoutComponent } from './layouts/country/countryLayout.component';
import { ByCountryPageComponent } from './pages/byCountry/byCountryPage.component';
import { ByRegionPageComponent } from './pages/byRegion/byRegionPage.component';
import { CountryPageComponent } from './pages/country/countryPage.component';

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
                path: 'by-country', 
                component: ByCountryPageComponent, 
            }, 
            {
                path: 'by-region', 
                component: ByRegionPageComponent, 
            }, 
            {
                path: 'by/:code', 
                component: CountryPageComponent, 
            },
            {
                path: '**', 
                redirectTo: 'by-capital',
            }
        ]
    }, 
]