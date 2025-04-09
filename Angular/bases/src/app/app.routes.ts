import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counterPage.component';
import { HeroPageComponent } from './pages/hero/heroPage.component';
export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent
    }, 
    {
        path: 'hero',
        component: HeroPageComponent
    }
];
