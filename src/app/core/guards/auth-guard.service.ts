import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) {}
    canActivate(): boolean {
        if (!this.auth.isAuthenticated()) {
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
            return false;
        }
        return true;
    }
}
