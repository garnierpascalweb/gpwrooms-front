import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { GuestModule } from './guest/guest.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    GuestModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  // providers retouche selon https://stackoverflow.com/questions/71094093/angular-routing-not-working-after-running-ng-build-at-deployment mais ne regle pas le probleme
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
