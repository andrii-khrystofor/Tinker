import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-example',
  templateUrl: './feature-example.component.html',
  styleUrls: ['./feature-example.component.scss']
})
export class FeatureExampleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToFeatureModal(): void {
    this.router.navigate([
      '/root',
      {
        outlets: {
          modalOutlet: [
            'modal',
            'modal-feature',
          ],
          dialogOutlet: null,
        },
      },
    ]);
  }

}
