import { ValidationErrors } from "@angular/forms";

export function errorMessage(errors: ValidationErrors) : string{
    if (errors['required']) {
        return 'This field is required';
    }
    if (errors['email']){
        return 'This field should be an email';
    }
    const [_, value] = Object.entries(errors)[0]
    return value as string;
}
