import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RootModule } from './root/root.module';
import { MainComponent } from './layouts/main/main.component';
import { ModalComponent } from './layouts/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
