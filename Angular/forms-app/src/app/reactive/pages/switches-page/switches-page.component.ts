import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';
@Component({
  selector: 'app-switches-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './switches-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchesPageComponent {
    private readonly formBuilder: FormBuilder = inject(FormBuilder);
    formUtils = FormUtils;
    myForm: FormGroup = this.formBuilder.group({
        gender: ['M', [Validators.required]],
        notifications: [true, [Validators.required]],
        termsAndConditions: [false, [Validators.requiredTrue]],
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
