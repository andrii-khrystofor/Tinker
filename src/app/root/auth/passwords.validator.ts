import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function samePasswords(parentForm: FormGroup): ValidatorFn {
    return (_: AbstractControl): ValidationErrors | null => {
        const same = parentForm.get('password')?.value === parentForm.get('repeatPassword')?.value;
        return !same ? {samePasswords: `Passwords are not equal`} : null;
    };
}