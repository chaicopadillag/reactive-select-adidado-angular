import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryModule } from './country/country.module';
import { SelectorPageComponent } from './country/pages/selector-page/selector-page.component';

@NgModule({
  declarations: [AppComponent, SelectorPageComponent],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CountryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
