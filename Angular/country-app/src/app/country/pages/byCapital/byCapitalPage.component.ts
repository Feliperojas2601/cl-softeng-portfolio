import { Component } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/searchInput/searchInput.component';
import { CountryListComponent } from '../../components/countryList/countryList.component';
@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './byCapitalPage.component.html',
})
export class ByCapitalPageComponent {
    searchByCapital(capital: string) {
        console.log(capital);
    }
}
