import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  // ReactiveFormsModule es necesario para usar el formulario reactivo
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent {
    // Manera tradicional reactiva
    // Formgroup define la estructura del formulario
    // FormControl define el estado de cada campo del formulario y sus validaciones
    myForm = new FormGroup({
        name: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
        price: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
        inStock: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    })

    // Métodos para acceder a los campos del formulario
}
