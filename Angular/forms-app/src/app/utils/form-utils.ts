import { AbstractControl, FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {
    static readonly namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
    static readonly emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    static readonly notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

    // utiles de muchos formularios, centralizados
    static isInvalidField(form: FormGroup, field: string): boolean | null {
        const control = form.controls[field];
        return control.errors && control.touched;
    }

    // Método para obtener el error de un campo
    static getFieldError(form: FormGroup, field: string, patternMessage?: string): string | null {
        if (!form.controls[field]) return null;
        const errors = form.controls[field].errors ?? {};
        return this.getTextError(errors, patternMessage);
    }

    static isInvalidFieldInArray(formArray: FormArray, index: number): boolean | null {
        const control = formArray.controls[index];
        return control.errors && control.touched;
    }

    static getFieldErrorInArray(formArray: FormArray, index: number, patternMessage?: string): string | null {
        const control = formArray.controls[index];
        if (!control) return null;
        const errors = control.errors ?? {};
        return this.getTextError(errors, patternMessage);
    }

    static getTextError(errors: ValidationErrors, patternMessage?: string): string | null {
        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'required':
                    return 'This field is required';
                case 'minlength':
                    return `This field must be at least ${errors['minlength'].requiredLength} characters`;
                case 'min':
                    return `This field must be greater or equal than ${errors['min'].min}`;
                case 'pattern':
                    return patternMessage ?? 'This field is invalid';
                default:
                    return 'Not handled error';
            }
        }
        return null;
    }

    static isFieldEqualToField(field1: string, field2: string) {
        return (form: AbstractControl) => {
            const field1Value = form.get(field1)?.value;
            const field2Value = form.get(field2)?.value;
            return field1Value === field2Value ? null : { passwordsNotEqual: true };
        }
    }
}
