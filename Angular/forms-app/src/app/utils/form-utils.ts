import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {
    // utiles de muchos formularios, centralizados
    static isInvalidField(form: FormGroup, field: string): boolean | null {
        const control = form.controls[field];
        return control.errors && control.touched;
    }

    // Método para obtener el error de un campo
    static getFieldError(form: FormGroup, field: string): string | null {
        if (!form.controls[field]) return null;
        const errors = form.controls[field].errors ?? {};
        return this.getTextError(errors);
    }

    static isInvalidFieldInArray(formArray: FormArray, index: number): boolean | null {
        const control = formArray.controls[index];
        return control.errors && control.touched;
    }

    static getFieldErrorInArray(formArray: FormArray, index: number): string | null {
        const control = formArray.controls[index];
        if (!control) return null;
        const errors = control.errors ?? {};
        return this.getTextError(errors);
    }

    static getTextError(errors: ValidationErrors): string | null {
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
