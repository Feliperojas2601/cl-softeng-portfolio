import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/searchInput/searchInput.component';
import { CountryListComponent } from '../../components/countryList/countryList.component';  
import { Region } from '../../interfaces/region.interface';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
@Component({
  selector: 'app-by-region-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './byRegionPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPageComponent {
    private readonly countryService = inject(CountryService);

    public regions: Region[] = [
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
        'Antarctic',
    ];

    selectedRegion = signal<Region | null>(null);

    countriesByRegion = rxResource({
        request: () => ({ region: this.selectedRegion() }),
        loader: ({ request }) => {
            if(!request.region) return of([]);
            return this.countryService.searchCountryByRegion(request.region);
        },
    });
}
