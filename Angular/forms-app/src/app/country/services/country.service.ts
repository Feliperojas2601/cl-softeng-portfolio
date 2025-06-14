import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { combineLatest, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    private readonly baseUrl = 'https://restcountries.com/v3.1';
    private readonly _regions: string[] = [
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
    ];
    http = inject(HttpClient); 

    get regions() {
        return this._regions;
    }

    getCountriesByRegion(region: string): Observable<Country[]> {
        if (!region || region === '') {
            return of([]);
        }
        return this.http.get<Country[]>(`${this.baseUrl}/region/${region}?fields=cca3,name,borders`);
    }

    getCountryByAlphaCode(alphaCode: string): Observable<Country> {
        return this.http.get<Country>(`${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`);
    }

    getCountryNamesByBorderCodes(borders: string[]): Observable<Country[]> {
        if (!borders || borders.length === 0) {
            return of([]);
        }
        const countryRequest: Observable<Country>[] = [];
        borders.forEach(code => {
            countryRequest.push(this.getCountryByAlphaCode(code));
        });
        // Retorno una combinacion de todos los observables
        return combineLatest(countryRequest);
    }
}
