import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) { }

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

  changeLanguage(): void {
    const currentLanguage = localStorage.getItem('selectedLanguage');
    switch (currentLanguage) {
      case 'en':
        this.translateService.use('ua');
        localStorage.setItem('selectedLanguage', 'ua');
        break;
      case 'ua':
        this.translateService.use('en');
        localStorage.setItem('selectedLanguage', 'en');
        break;
    }
  }
}
