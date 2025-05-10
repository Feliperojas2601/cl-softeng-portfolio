import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';
@Component({
  selector: 'app-basic-page',
  // ReactiveFormsModule es necesario para usar el formulario reactivo
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent {
    // Manera tradicional reactiva group y control
    // Formgroup define la estructura del formulario
    // FormControl define el estado de cada campo del formulario y sus validaciones
    /*myForm = new FormGroup({
        name: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
        price: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
        inStock: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    })*/

    // Manera reactiva con FormBuilder, definición como objeto de javascript, para anidados es mejor
    private readonly formBuilder: FormBuilder = inject(FormBuilder);
    myForm: FormGroup = this.formBuilder.group({
        // primer valor es el valor por defecto, segundo es el array de validaciones syncronas, tercer valor es el array de validaciones asincronas
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: [0, [Validators.required, Validators.min(1)]],
        inStock: [0, [Validators.required, Validators.min(1)]],
    })

    // Tocar todos los campos del formulario para mostrar errores si están vácios
    save(): void {
        // Si el formulario es inválido, se marcan todos los campos como tocados y se devuelve
        if (this.myForm.invalid) {
            this.myForm.markAllAsTouched();
            return;
        }
        // Si el formulario es válido, se resetea el formulario
        this.myForm.reset({
            name: '',
            price: 0,
            inStock: 0,
        });
    }

    // Importar el método isInvalidField y getFieldError de FormUtils
    formUtils = FormUtils;
}
