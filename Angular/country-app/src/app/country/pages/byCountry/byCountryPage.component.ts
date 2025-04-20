import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/searchInput/searchInput.component';
import { CountryListComponent } from '../../components/countryList/countryList.component';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './byCountryPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPageComponent { }
