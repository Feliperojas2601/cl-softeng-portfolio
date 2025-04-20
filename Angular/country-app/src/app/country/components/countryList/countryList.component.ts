import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'country-list',
  imports: [DecimalPipe],
  templateUrl: './countryList.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent {
    countries = input.required<Country[]>();
}
