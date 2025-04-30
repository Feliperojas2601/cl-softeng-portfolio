import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RestCountry } from '../interfaces/restCountry.interface';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import { restCountryArrayToCountryArray } from '../mappers/restCountryToCountry.mapper';
import { Country } from '../interfaces/country.interface';

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = 'https://restcountries.com/v3.1';

    // Almacenamiento en prop, no tenemos que pensar en una seña, no está relacionado con un cambio en el DOM
    private readonly termCacheByCapital = new Map<string, Country[]>();
    private readonly termCacheByCountry = new Map<string, Country[]>();

    searchByCapital(term: string) {
        term = term.trim().toLowerCase();
        if(this.termCacheByCapital.has(term)) {
            console.log('Retornando del cache la respuesta by capital: ', term);
            return of(this.termCacheByCapital.get(term)!);
        }
        return this.http.get<RestCountry[]>(`${this.baseUrl}/capital/${term}`).pipe(
            map(restCountries => restCountryArrayToCountryArray(restCountries)),
            // Añadir el observable al cache
            tap(countries => this.termCacheByCapital.set(term, countries)),
            // Atrapa los errores y devuelve un observable de error, podemos usar el of o el throwError
            // catchError(error => of(error))
            // Excepciones del lado del service
            catchError(error => throwError(() => 'No results found or error in search'))
        );
    }

    searchByCountry(term: string) {
        term = term.trim().toLowerCase();
        if(this.termCacheByCountry.has(term)) {
            console.log('Retornando del cache la respuesta by country: ', term);
            return of(this.termCacheByCountry.get(term)!).pipe(
                delay(1500)
            );
        }
        return this.http.get<RestCountry[]>(`${this.baseUrl}/name/${term}`).pipe(
            map(restCountries => restCountryArrayToCountryArray(restCountries)),
            tap(countries => this.termCacheByCountry.set(term, countries)),
            // Ralentizar la respuesta
            delay(1500),
            // Añadir el observable al cache
            catchError(error => throwError(() => 'No results found or error in search'))
        );
    }

    searchCountryByCode(code: string): Observable<Country | undefined> {
        return this.http.get<RestCountry[]>(`${this.baseUrl}/alpha/${code}`).pipe(
            map(restCountries => restCountryArrayToCountryArray(restCountries)),
            map(countries => countries[0]),
            catchError(error => throwError(() => 'Country not found or error in search'))
        );
    }
}