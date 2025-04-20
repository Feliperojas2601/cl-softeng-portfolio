import { Component, inject, signal, resource } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/searchInput/searchInput.component';
import { CountryListComponent } from '../../components/countryList/countryList.component';
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './byCapitalPage.component.html',
})
export class ByCapitalPageComponent {
    private readonly countryService = inject(CountryService);

    // Manejo señales anterior a la versión 19 de un suscribe a un observable
    /*public countries = signal<Country[]>([]);
    public isLoading = signal<boolean>(false);
    public isError = signal<string | null>(null);

    searchByCapital(term: string) {
        if (this.isLoading()) return;
        this.isLoading.set(true);
        this.countryService.searchByCapital(term)
            .subscribe({
                // next es el callback que se ejecuta cuando se recibe la respuesta
                // error es el callback que se ejecuta cuando ocurre un error
                // complete es el callback que se ejecuta cuando se completa la respuesta
                next: (countries) => {
                    this.countries.set(countries);
                    this.isError.set(null);
                    this.isLoading.set(false);
                },
                error: (error) => {
                    this.countries.set([]);
                    this.isError.set(error.message);
                    this.isLoading.set(false);
                },
                complete: () => {
                    this.isLoading.set(false);
                }
                // Excepciones del lado del componente
            }
        );
    }*/

    // Manejo con resources
    public term = signal('');

    // Cuando se carga un recurso, se ejecuta la función request y se ejecuta la función loader en donde tengo acceso al request
    // Cuando cambie la señal term, se ejecuta de nuevo el recurso
    public countryByCapitalResource = resource({
        request: () => ({ term: this.term() }),
        loader: async({ request }) => {
            if (!request.term) return []; 
            // Vamos a devolver una promesa y no un observable con el firstValueFrom
            return await firstValueFrom(this.countryService.searchByCapital(request.term));
        }
    });
}
