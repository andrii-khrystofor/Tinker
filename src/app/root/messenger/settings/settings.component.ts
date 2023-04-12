import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import jwt_decode from "jwt-decode";
import { Subscription } from 'rxjs';
import { WebSocketService } from 'src/app/core/services/web-socket/web-socket.service';
import { User } from 'src/app/types/interfaces/user';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

    @HostListener('document:keydown.escape', ['$event'])
    listenToEscPress(): void {
        this.closeSettings();
    }
    user!: User;
    subscription = new Subscription()

    constructor(
        private translateService: TranslateService,
        private router: Router,
        private webSocketService: WebSocketService) { }

    settingsForm: FormGroup = new FormGroup({
        name: new FormControl(),
        username: new FormControl(),
        email: new FormControl(),
        language: new FormControl()
    });

    ngOnInit(): void {
        this.user = jwt_decode(localStorage.getItem('authToken') || '');
        this.setInitialFormData();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

    setInitialFormData(): void {
        const language = localStorage.getItem('selectedLanguage');
        this.settingsForm.get('language')?.setValue(language);

        this.settingsForm.get('name')?.setValue(this.user.name);
        this.settingsForm.get('username')?.setValue(this.user.username);
        this.settingsForm.get('email')?.setValue(this.user.email);

        this.settingsForm.updateValueAndValidity();
    }

    changeLanguage(ev: MatSelectChange): void {
        const language = ev.value;
        this.translateService.use(language);
        localStorage.setItem('selectedLanguage', language);
    }

    changeTheme(themeNumber: number): void {
        console.log(`Change theme to ${themeNumber}`);
    }

    closeSettings(): void {
        this.router.navigate([
            '/root/main/messenger',
            { outlets: { modalOutlet: null } },
        ]);
    }

    updateUser(): void {
        const updatedUser = this.settingsForm.value
        const user = { email: this.user.email, name: this.user.name, username: this.user.username }

        delete updatedUser.language

        if (JSON.stringify(updatedUser) === JSON.stringify(user)) return;

        console.log('update')

        this.webSocketService.emit('updateUser', { id: this.user.id, updatedUser })

        this.webSocketService.listen('updateUser').subscribe(token => {
            localStorage.setItem('authToken', token)
            this.user = jwt_decode(token)
            this.setInitialFormData()
        })
    }
}
