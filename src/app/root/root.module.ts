import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureExampleComponent } from './feature-example/feature-example.component';
import { RootRoutingModule } from './root-routing.module';



@NgModule({
  declarations: [
    FeatureExampleComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule
  ]
})
export class RootModule { }
