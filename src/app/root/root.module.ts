import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureExampleComponent } from './feature-example/feature-example.component';
import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { ModalFeatureExampleComponent } from './modal-feature-example/modal-feature-example.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    FeatureExampleComponent,
    RootComponent,
    ModalFeatureExampleComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    MatButtonModule,
  ]
})
export class RootModule { }
