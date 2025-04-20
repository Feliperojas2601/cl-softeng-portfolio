import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/searchInput/searchInput.component';
import { CountryListComponent } from '../../components/countryList/countryList.component';  

@Component({
  selector: 'app-by-region-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './byRegionPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPageComponent { }
