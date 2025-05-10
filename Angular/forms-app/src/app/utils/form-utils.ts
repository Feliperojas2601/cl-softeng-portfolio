import { FormGroup } from '@angular/forms';

export class FormUtils {
    static isInvalidField(form: FormGroup, field: string): boolean | null {
        const control = form.controls[field];
        return control.errors && control.touched;
    }

    // Método para obtener el error de un campo
    static getFieldError(form: FormGroup, field: string): string | null {
        if (!form.controls[field]) return null;
        const errors = form.controls[field].errors ?? {};
        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'required':
                    return 'This field is required';
                case 'minlength':
                    return `This field must be at least ${errors['minlength'].requiredLength} characters`;
                case 'min':
                    return `This field must be greater or equal than ${errors['min'].min}`;
            }
        }
        return null;
    }
}