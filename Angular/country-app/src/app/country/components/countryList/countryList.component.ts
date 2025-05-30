import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './countryList.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent {
    countries = input.required<Country[]>();
    errorMessage = input<unknown>();
    isLoading = input<boolean>(false);
    isEmpty = input<boolean>(false);
}
