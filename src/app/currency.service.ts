import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://api.currencylayer.com';
const key = '0d542abe98c643ea10128e6cb419d7d6';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencies(): any {
    return this.http.get<any>(`${apiUrl}/list?access_key=${key}`);
  }

  convert(from, to, amount): any {
    return this.http.get<any>(`${apiUrl}/convert?from=${from}&to=${to}&amount=${amount}&access_key=${key}`);
  }

  liveRate(source, currencies): any {
    return this.http.get<any>(`${apiUrl}/live?access_key=${key}&currencies=${currencies}&source=${source}&format=1`);
  }

  latest(): any {
    return this.http.get<any>(`https://api.exchangeratesapi.io/latest?symbols=USD,GBP`);
  }
}
