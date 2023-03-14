import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { InputTypes } from 'src/app/types/enums/input-types.enum';
import { hashPassword } from '../passwordHash';
import { samePasswords } from '../passwords.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{
  
  private unsubscribe$ = new Subject();

  LoginForm: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
  });

  passwordInput = InputTypes.Password;

  constructor( private router: Router) { 
  }

  ngOnInit(): void {
      this.LoginForm.get('repeatPassword')?.addValidators(samePasswords(this.LoginForm));
      this.LoginForm.get('password')?.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
          this.LoginForm.get('repeatPassword')?.updateValueAndValidity();
      })
  }


  submitData() {
      this.LoginForm.markAllAsTouched();

      if(this.LoginForm.valid){
          const valueToSend = JSON.parse(JSON.stringify(this.LoginForm.value));
          delete valueToSend['repeatPassword'];
          valueToSend.password = hashPassword(valueToSend.password);
          console.log(valueToSend);
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