import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'country-top-menu',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './topMenu.component.html',
})
export class TopMenuComponent {}
