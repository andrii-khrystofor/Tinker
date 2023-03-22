import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tinker';

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    const currentLanguage = localStorage.getItem('selectedLanguage');
    if (!currentLanguage) {
      localStorage.setItem('selectedLanguage', 'en');
      this.translateService.use('en');
    }
    else this.translateService.use(currentLanguage);
  }
}
