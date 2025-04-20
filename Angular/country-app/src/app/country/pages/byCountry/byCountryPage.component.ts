import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/searchInput/searchInput.component';
import { CountryListComponent } from '../../components/countryList/countryList.component';
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './byCountryPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPageComponent {
    private readonly countryService = inject(CountryService);

    /*public term = signal('');

    public countryByCountryResource = resource({
        request: () => ({ term: this.term() }),
        loader: async({ request }) => {
            if (!request.term) return [];
            return await firstValueFrom(this.countryService.searchByCountry(request.term));
        }
    });*/ 
    
    public term = signal('');

    public countryByCountryResource = rxResource({
        request: () => ({ term: this.term() }),
        loader: ({ request }) => {
            if (!request.term) return of([]);
            return this.countryService.searchByCountry(request.term);
        }
    });
}
