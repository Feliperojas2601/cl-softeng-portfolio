import { JsonPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {
    fb = inject(FormBuilder);
    myForm = this.fb.group({
        region: ['', Validators.required],
        country: ['', Validators.required],
        border: ['', Validators.required],
    });
    countryService = inject(CountryService);
    regions = signal<string[]>(this.countryService.regions);
    countries = signal<Country[]>([]);
    borders = signal<string[]>([]);

    // Cuando cambie la region, se actualiza el formulario, se monta apenas se renderiza el componente
    onFormChange = effect((onCleanup) => {
        const regionSubscription = this.onRegionChanged();
        const countrySubscription = this.onCountryChanged();
        onCleanup(() => {
            regionSubscription.unsubscribe();
            countrySubscription.unsubscribe();
        });
    });

    // Retorno una subscription para poder desuscribirme cuando se desmonte el componente
    onRegionChanged() {
        return this.myForm
            .get('region')!
            .valueChanges
            .pipe(
                tap(() => {
                    // Resetear el formulario
                    this.myForm.get('country')!.setValue('');
                    this.countries.set([]);
                    this.myForm.get('border')!.setValue('');
                    this.borders.set([]);
                }), 
                // transformo el valor de la region en un observable de paises
                switchMap((region) => this.countryService.getCountriesByRegion(region!)),
            )
            .subscribe(countries => {
                console.log('countries', countries);
                this.countries.set(countries);
            });
    }

    onCountryChanged() {
        return this.myForm
            .get('country')!
            .valueChanges
            .pipe(
                tap(() => {
                    this.myForm.get('border')!.setValue('');
                    this.borders.set([]);
                }),
                // si el pais es '' entonces no siga 
                filter((country) => country !== ''),
                switchMap((country) => this.countryService.getCountryByAlphaCode(country!)),
                switchMap((country) => this.countryService.getCountryNamesByBorderCodes(country.borders)),
            )
            .subscribe(countries => {
                this.borders.set(countries.map(c => c.name.common));
            });
    }
}
