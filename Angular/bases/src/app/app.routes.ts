import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counterPage.component';
import { HeroPageComponent } from './pages/hero/heroPage.component';
import { DragonballComponent } from './pages/dragonball/dragonballPage.component';
import { DragonballSuperComponent } from './pages/dragonballSuper/dragonballSuperPage.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent
    }, 
    {
        path: 'hero',
        component: HeroPageComponent
    }, 
    {
        path: 'dragonball',
        component: DragonballComponent
    },
    {
        path: 'dragonball-super',
        component: DragonballSuperComponent,
    },
    // Wildcard route, por defecto se redirige al counter en ''
    {
        path: '**',
        redirectTo: ''
    }
];
