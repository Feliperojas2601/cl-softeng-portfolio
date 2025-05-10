import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';
@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicPageComponent {
    private readonly formBuilder: FormBuilder = inject(FormBuilder);
    formUtils = FormUtils;
    myForm: FormGroup = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        favoriteGames: this.formBuilder.array([
            // Inicializar con 2 juegos
            ['GTA VI', Validators.required],
            ['The Last of Us', Validators.required],
        ], [Validators.minLength(3)]),
    });

    get favoriteGames() {
        // get función para obtener un control
        return this.myForm.get('favoriteGames') as FormArray;
    }
}
