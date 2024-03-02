import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { CountryI, Region } from '../interfaces/countries-response.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1';
  private _regions: string[] = Object.keys(Region);

  constructor(private httpClient: HttpClient) {}

  get regions() {
    return [...this._regions];
  }

  getCountriesByRegion(region: string) {
    if (region === '') return of([]);

    return this.httpClient
      .get<CountryI[]>(
        `${this.apiUrl}/region/${region}?fields=cca3,name,borders`
      )
      .pipe(catchError((err) => of([])));
  }

  getCountryByAlphaCode(alpha: string) {
    if (alpha.length <= 0) return of(null);

    return this.httpClient
      .get<CountryI>(`${this.apiUrl}/alpha/${alpha}?fields=cca3,name,borders`)
      .pipe(catchError((err) => of(null)));
  }

  getCountriesByAlphaCode(alphaCodes: string[]) {
    if (alphaCodes.length <= 0) return of([]);

    return this.httpClient
      .get<CountryI[]>(
        `${this.apiUrl}/alpha?codes=${alphaCodes}&fields=cca3,name,borders`
      )
      .pipe(catchError((err) => of([])));
  }
}
