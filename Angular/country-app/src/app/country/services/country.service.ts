import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RestCountry } from '../interfaces/restCountry.interface';
import { catchError, delay, map, throwError } from 'rxjs';
import { restCountryArrayToCountryArray } from '../mappers/restCountryToCountry.mapper';

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = 'https://restcountries.com/v3.1';

    searchByCapital(term: string) {
        term = term.trim().toLowerCase();
        return this.http.get<RestCountry[]>(`${this.baseUrl}/capital/${term}`).pipe(
            map(restCountries => restCountryArrayToCountryArray(restCountries)),
            // Atrapa los errores y devuelve un observable de error, podemos usar el of o el throwError
            // catchError(error => of(error))
            // Excepciones del lado del service
            catchError(error => throwError(() => 'No se encontraron resultados o hubo un error en la búsqueda'))
        );
    }

    searchByCountry(term: string) {
        term = term.trim().toLowerCase();
        return this.http.get<RestCountry[]>(`${this.baseUrl}/name/${term}`).pipe(
            map(restCountries => restCountryArrayToCountryArray(restCountries)),
            // Ralentizar la respuesta
            delay(1500),
            catchError(error => throwError(() => 'No se encontraron resultados o hubo un error en la búsqueda'))
        );
    }
}