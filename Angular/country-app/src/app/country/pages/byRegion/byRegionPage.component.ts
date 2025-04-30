import { ChangeDetectionStrategy, Component, inject, linkedSignal } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/searchInput/searchInput.component';
import { CountryListComponent } from '../../components/countryList/countryList.component';  
import { Region } from '../../interfaces/region.interface';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
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

    activatedRoute = inject(ActivatedRoute);
    router = inject(Router);
    regionParam = this.activatedRoute.snapshot.queryParamMap.get('region') ?? '';

    selectedRegion = linkedSignal<Region | null>(() => this.regionParam as Region | null);

    countriesByRegion = rxResource({
        request: () => ({ region: this.selectedRegion() }),
        loader: ({ request }) => {
            if(!request.region) return of([]);
            this.router.navigate(['/country/by-region'], { queryParams: { region: request.region } });
            return this.countryService.searchCountryByRegion(request.region);
        },
    });
}
