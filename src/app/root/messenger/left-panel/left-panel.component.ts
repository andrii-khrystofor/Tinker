import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/core/guards/auth-guard.service';

@Component({
    selector: 'app-left-panel',
    templateUrl: './left-panel.component.html',
    styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

    constructor(private authGuard: AuthGuardService, private router: Router) { }

    ngOnInit(): void {
    }

    navigateToMainPage(): void {
        this.router.navigate(['/root/main/messenger']);
    }

    navigateToSettings(): void {
        this.router.navigate([
            '/root/main/messenger',
            {
                outlets: {
                    modalOutlet: [
                        'modal',
                        'settings',
                    ]
                },
            },
        ]);
    }

    navigateToContacts(): void {
        this.router.navigate([
            '/root/main/messenger',
            {
                outlets: {
                    modalOutlet: [
                        'modal',
                        'contacts',
                    ]
                },
            },
        ]);
    }

    logOut(): void {
        localStorage.removeItem('authToken');

        this.authGuard.navigateToSingIn();
      window.location.reload();
    }

}
