import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        // Carga siempre => Para cosas que siempre están component: DashboardComponent,
        // Carga lazy => Caraga perezosa, para cosas que no siempre están, a demanda
        loadComponent: () => import('./gifs/pages/dashboard/dashboardPage.component').then(m => m.DashboardPageComponent),
        // Rutas hijas dentro de /dashboard, aquí se definen y luego un router-outlet en el html de dashboardPage.component.html
        children: [
            {
                path: 'search',
                loadComponent: () => import('./gifs/pages/search/searchPage.component').then(m => m.SearchPageComponent),
            },
            {
                path: 'trending',
                loadComponent: () => import('./gifs/pages/trending/trendingPage.component').then(m => m.TrendingPageComponent),
            }, 
            {
                path: '**',
                redirectTo: 'trending',
            }
        ]
    }, 
    {
        path: '**',
        redirectTo: 'dashboard',
    }
];
