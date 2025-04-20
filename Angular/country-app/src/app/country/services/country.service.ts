import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RestCountry } from '../interfaces/restCountry.interface';
import { map } from 'rxjs';
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
            map(restCountries => restCountryArrayToCountryArray(restCountries))
        );
    }
}