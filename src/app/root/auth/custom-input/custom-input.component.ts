import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputTypes } from 'src/app/types/enums/input-types.enum';
import { errorMessage } from '../error-messages';

@Component({
    selector: 'app-custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {
    @Input()
    formGroup!: FormGroup;

    @Input()
    controlName: string = '';

    @Input()
    label: string = '';

    @Input()
    placeholder: string = '';

    @Input()
    inputType: InputTypes = InputTypes.Default;

    get formControlError() {
        const control = this.formGroup.get(this.controlName);
        return control?.invalid && control.touched && control.errors !== null ? errorMessage(control.errors) : null;
    }
}
