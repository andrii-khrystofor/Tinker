import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { InputTypes } from 'src/app/types/enums/input-types.enum';
import { hashPassword } from '../passwordHash';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    @HostListener('document:keydown', ['$event'])
    listenToEscPress(event: KeyboardEvent): void {
        switch (event.key) {
            case 'Enter':
                this.submitData();
                break;
            case 'Escape':
                this.backToSignIn();
                break;
        }
    }

    isLoading = false;
    isLoginError = false;

    loginForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
    });

    passwordInput = InputTypes.Password;

    constructor(private router: Router, private http: HttpClient) {
    }

    submitData() {
        this.loginForm.markAllAsTouched();
        if (this.loginForm.valid) {
            const valueToSend = JSON.parse(JSON.stringify(this.loginForm.value));
            valueToSend.password = hashPassword(valueToSend.password);

            this.isLoading = true;
            this.isLoginError = false;

            this.http.post('api/login', {
                ...valueToSend
            })
                .pipe(catchError(error => of(error)))
                .subscribe((response: any) => {
                    if (response.error) {
                        this.isLoginError = true;
                        this.isLoading = false;
                        return;
                    }
                    localStorage.setItem('authToken', response?.accessToken);
                    this.router.navigateByUrl('/root/main/messenger');

                    this.isLoading = false;
                });
        }
    }

    backToSignIn() {
        this.router.navigate([
            '/root',
            {
                outlets: {
                    modalOutlet: [
                        'modal',
                        'auth',
                        'sign-in',
                    ],
                    dialogOutlet: null,
                },
            },
        ]);
    }
}
