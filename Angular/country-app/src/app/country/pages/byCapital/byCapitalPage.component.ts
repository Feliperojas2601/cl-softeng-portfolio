import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/searchInput/searchInput.component';
import { CountryListComponent } from '../../components/countryList/countryList.component';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './byCapitalPage.component.html',
})
export class ByCapitalPageComponent {
    private readonly countryService = inject(CountryService);

    public countries = signal<Country[]>([]);
    public isLoading = signal<boolean>(false);
    public isError = signal<string | null>(null);

    searchByCapital(term: string) {
        if (this.isLoading()) return;
        this.isLoading.set(true);
        this.countryService.searchByCapital(term)
            .subscribe(countries => {
                this.countries.set(countries);
                this.isLoading.set(false);
            }
        );
    }
}
