import { Component } from '@angular/core';
import { ReactiveRoutes } from '../../../reactive/reactive.routes';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

interface MenuItem {
    title: string;
    route: string;
}

const reactiveItems = ReactiveRoutes[0].children ?? [];

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
    reactiveMenu: MenuItem[] = reactiveItems.map(route => ({
        title: route.title as string,
        route: `reactive/${route.path}`
    }));

    authMenu: MenuItem[] = [
        {
            title: 'Sign up',
            route: './auth'
        },
    ]

    countryMenu: MenuItem[] = [
        {
            title: 'Country',
            route: './country'
        },
    ]
}
