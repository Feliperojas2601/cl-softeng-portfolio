import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-register-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
    private readonly formBuilder: FormBuilder = inject(FormBuilder);
    formUtils = FormUtils;
    myForm: FormGroup = this.formBuilder.group({
        name: ['', [Validators.required, Validators.pattern(FormUtils.namePattern)]],
        email: ['', [Validators.required, Validators.pattern(FormUtils.emailPattern)], [FormUtils.checkingIfEmailExists]],
        username: ['', [Validators.required, Validators.minLength(6), Validators.pattern(FormUtils.notOnlySpacesPattern), FormUtils.checkingUsernameIsNotOffensive]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password2: ['', [Validators.required]],
    }, {
        validators: [FormUtils.isFieldEqualToField('password', 'password2')] // Validación passwords iguales a nivel de formulario
    });

    save() {
        if (this.myForm.invalid) {
            this.myForm.markAllAsTouched();
            return;
        }
        console.log(this.myForm.value);
        this.myForm.reset();
    }
}
