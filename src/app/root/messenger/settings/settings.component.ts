import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    @HostListener('document:keydown.escape', ['$event'])
    listenToEscPress(): void {
        this.closeSettings();
    }

    constructor(
        private translateService: TranslateService,
        private router: Router) { }

    settingsForm: FormGroup = new FormGroup({
        name: new FormControl(),
        username: new FormControl(),
        email: new FormControl(),
        language: new FormControl()
    });

    ngOnInit(): void {
        this.setInitialFormData();
    }

    setInitialFormData(): void {
        const language = localStorage.getItem('selectedLanguage');
        this.settingsForm.get('language')?.setValue(language);

        this.settingsForm.get('name')?.setValue('Ofelia Limberty');
        this.settingsForm.get('username')?.setValue('@username_ofelia');
        this.settingsForm.get('email')?.setValue('ofelia@gmail.com');

        this.settingsForm.updateValueAndValidity();
    }

    changeLanguage(ev: MatSelectChange): void {
        const language = ev.value;
        this.translateService.use(language);
        localStorage.setItem('selectedLanguage', language);
    }

    changeTheme(themeNumber: number): void {
        console.log(`Change theme to ${themeNumber}`);

        const newTheme = "./node_modules/@angular/material/prebuilt-themes/purple-green.css";

    }

    closeSettings(): void {
        this.router.navigate([
            '/root/main/messenger',
            { outlets: { modalOutlet: null } },
        ]);
    }
}
