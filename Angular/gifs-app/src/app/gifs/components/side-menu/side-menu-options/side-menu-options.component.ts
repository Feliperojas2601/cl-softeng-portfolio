import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from '../../../services/gifs.service';
interface MenuOption {
    label: string;
    subLabel: string;
    route: string; 
    icon: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent { 
    // No es una señal, si va a cambiar de manera dinamica usemos una señal
     menuOptions: MenuOption[] = [
        {
            label: 'Trending',
            subLabel: 'Trending GIFs',
            route: '/dashboard/trending',
            icon: 'fa-solid fa-chart-line'
        }, 
        {
            label: 'Search',
            subLabel: 'Search GIFs',
            route: '/dashboard/search',
            icon: 'fa-solid fa-magnifying-glass'
        }
     ]; 

    gifsService = inject(GifsService);
    searchHistoryKeys = this.gifsService.searchHistoryKeys;
}
