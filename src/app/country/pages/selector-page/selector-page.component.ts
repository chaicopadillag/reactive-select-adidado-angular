import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, switchMap, tap } from 'rxjs';
import { CountryI } from '../../interfaces/countries-response.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    borders: ['', Validators.required],
  });

  countries: CountryI[] = [];
  borders: CountryI[] = [];

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.getCountriesByRegion();
    this.getCountryByAlphaCode();
  }

  get regions() {
    return this.countryService.regions;
  }

  getCountriesByRegion() {
    this.myForm.controls['region'].valueChanges
      .pipe(
        filter((region) => region !== ''),
        tap(() => this.myForm.controls['country'].setValue('')),
        tap(() => (this.borders = [])),
        switchMap((region) => this.countryService.getCountriesByRegion(region))
      )
      .subscribe((countries) => (this.countries = countries));
  }

  getCountryByAlphaCode() {
    this.myForm.controls['country'].valueChanges
      .pipe(
        filter((code) => code !== ''),
        tap(() => this.myForm.controls['borders'].setValue('')),
        switchMap((alpha) => this.countryService.getCountryByAlphaCode(alpha)),
        switchMap((country) =>
          this.countryService.getCountriesByAlphaCode(country?.borders || [])
        )
      )
      .subscribe((countries) => (this.borders = countries));
  }
}
