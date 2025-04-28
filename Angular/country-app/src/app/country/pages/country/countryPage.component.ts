import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { NotFoundComponent } from '../../../shared/components/notFound/notFound.component';
import { CountryInformationComponent } from '../../components/countryInformation/countryInformation.component';

@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent, CountryInformationComponent],
  templateUrl: './countryPage.component.html',
})
export class CountryPageComponent {
    countryCode = inject(ActivatedRoute).snapshot.params['code'];

    private readonly countryService = inject(CountryService);

    countryByCodeResource = rxResource({
        request: () => ({ code: this.countryCode }),
        loader: ({ request }) => this.countryService.searchCountryByCode(request.code),
    });
}