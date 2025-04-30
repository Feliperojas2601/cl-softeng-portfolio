import { Component, inject, linkedSignal } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/searchInput/searchInput.component';
import { CountryListComponent } from '../../components/countryList/countryList.component';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router  } from '@angular/router';
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

    /*
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
    */ 

    // Inyección de ruta active
    activatedRoute = inject(ActivatedRoute);
    router = inject(Router);
    // Solo queremos leerlo una vez entonces usamos snapshot, sino usemos un suscribe
    termParam = this.activatedRoute.snapshot.queryParamMap.get('term') ?? '';

    // Manejo con rxResouces -> Estos sí trabajan con el observable
    public term = linkedSignal(() => this.termParam); // Inicializamos la señal con el valor del queryParam

    public countryByCapitalResource = rxResource({
        request: () => ({ term: this.term() }),
        loader: ({ request }) => {
            // Devolvemos un observable de un array vacío si no hay término
            if (!request.term) return of([]); 
            // Navegación con el router para mantener el queryParam term en la url
            this.router.navigate(['/country/by-capital'], { queryParams: { term: request.term } });
            return this.countryService.searchByCapital(request.term);
        }
    });
}
