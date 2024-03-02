import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CountryRoutingModule } from './country-routing.module';

@NgModule({
  declarations: [],
  imports: [RouterModule, HttpClientModule, CountryRoutingModule],
})
export class CountryModule {}
