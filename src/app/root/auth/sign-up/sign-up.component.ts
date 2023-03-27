import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, Subject, takeUntil } from 'rxjs';
import { InputTypes } from 'src/app/types/enums/input-types.enum';
import { hashPassword } from '../passwordHash';
import { samePasswords } from '../passwords.validator';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

	private unsubscribe$ = new Subject();

	signUpForm: FormGroup = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		name: new FormControl('', Validators.required),
		username: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required),
		repeatPassword: new FormControl('', Validators.required)
	});

	passwordInput = InputTypes.Password;

	constructor(private router: Router, private http: HttpClient) {
	}

	ngOnInit(): void {
		this.signUpForm.get('repeatPassword')?.addValidators(samePasswords(this.signUpForm));
		this.signUpForm.get('password')?.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
			this.signUpForm.get('repeatPassword')?.updateValueAndValidity();
		})
	}


	submitData() {
		this.signUpForm.markAllAsTouched();

		if (this.signUpForm.valid) {
			const valueToSend = JSON.parse(JSON.stringify(this.signUpForm.value));
			delete valueToSend['repeatPassword'];
			valueToSend.password = hashPassword(valueToSend.password);
			console.log(valueToSend);

			this.http.post('api/register', {
				...valueToSend
			})
				.pipe(catchError(error => of(error)))
				.subscribe((response: any) => {
					if (response.error) {
						return;
					}
					localStorage.setItem('authToken', response?.accessToken);
					this.router.navigateByUrl('/root/main/messenger');
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

	ngOnDestroy(): void {
		this.unsubscribe$.next(0);
		this.unsubscribe$.complete();
	}

}
