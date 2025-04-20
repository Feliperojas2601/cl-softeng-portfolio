import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-information',
  imports: [DecimalPipe],
  templateUrl: './countryInformation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInformationComponent {
    country = input.required<Country>();
    currentYear = computed(() => {
        return new Date().getFullYear();
    });
}
