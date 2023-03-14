import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(private router: Router) { }

  navigateToSignUp() {
    this.router.navigate([
      '/root',
      {
        outlets: {
          modalOutlet: [
            'modal',
            'auth',
            'sign-up',
          ],
          dialogOutlet: null,
        },
      },
    ]);
  }

  navigateToSignIn() {
    this.router.navigate([
      '/root',
      {
        outlets: {
          modalOutlet: [
            'modal',
            'auth',
            'login',
          ],
          dialogOutlet: null,
        },
      },
    ]);
  }

}
