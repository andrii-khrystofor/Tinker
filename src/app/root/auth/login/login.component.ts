import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject} from 'rxjs';
import { InputTypes } from 'src/app/types/enums/input-types.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  private unsubscribe$ = new Subject();

  LoginForm: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
  });

  passwordInput = InputTypes.Password;

  constructor( private router: Router) { 
  }

  ngOnInit(): void {
      
  }
  
  submitData() {
    this.LoginForm.markAllAsTouched();
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