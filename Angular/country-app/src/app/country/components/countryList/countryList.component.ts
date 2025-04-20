import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './countryList.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent { }
