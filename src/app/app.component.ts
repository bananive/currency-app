import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  from: any;
  to: any;
  amount: number;
  rate: number;
  result: number;
  countries: any[];
  currencies: any[];

  constructor(private currency: CurrencyService) {}

  ngOnInit(): void {
    // this.currency.getCurrencies().subscribe( res => {
    //   if (res.success) {
    //     const toArray = (obj) => Object.keys(obj).map(key => {
    //       return {'code': key, 'name': obj[key]};
    //     });
    //     this.currencies = toArray(res.currencies);
    //     this.from = this.currencies[0];
    //     console.log(this.currencies);
    //   }
    // });
    this.currencies = [
      { 'code': 'AUD', 'name': 'Australian Dollar'},
      { 'code': 'BGN', 'name': 'Bulgarian Lev'},
      { 'code': 'BRL', 'name': 'Brazilian Real'},
      { 'code': 'CAD', 'name': 'Canadian Dollar'},
      { 'code': 'CHF', 'name': 'Swiss Franc'},
      { 'code': 'CNY', 'name': 'Chinese Yuan'},
      { 'code': 'CZK', 'name': 'Czech Republic Koruna'},
      { 'code': 'DKK', 'name': 'Danish Krone'},
      { 'code': 'EUR', 'name': 'Euro'},
      { 'code': 'GBP', 'name': 'British Pound Sterling'},
      { 'code': 'HKD', 'name': 'Hong Kong Dollar'},
      { 'code': 'HRK', 'name': 'Croatian Kuna'},
      { 'code': 'HUF', 'name': 'Hungarian Forint'},
      { 'code': 'IDR', 'name': 'Indonesian Rupiah'},
      { 'code': 'ILS', 'name': 'Israeli New Sheqel'},
      { 'code': 'INR', 'name': 'Indian Rupee'},
      { 'code': 'ISK', 'name': 'Icelandic Króna'},
      { 'code': 'JPY', 'name': 'Japanese Yen'},
      { 'code': 'KRW', 'name': 'South Korean Won'},
      { 'code': 'MXN', 'name': 'Mexican Peso'},
      { 'code': 'MYR', 'name': 'Malaysian Ringgit'},
      { 'code': 'NOK', 'name': 'Norwegian Krone'},
      { 'code': 'NZD', 'name': 'New Zealand Dollar'},
      { 'code': 'PHP', 'name': 'Philippine Peso'},
      { 'code': 'PLN', 'name': 'Polish Zloty'},
      { 'code': 'RON', 'name': 'Romanian Leu'},
      { 'code': 'RUB', 'name': 'Russian Ruble'},
      { 'code': 'SEK', 'name': 'Swedish Krona'},
      { 'code': 'SGD', 'name': 'Singapore Dollar'},
      { 'code': 'THB', 'name': 'Thai Baht'},
      { 'code': 'TRY', 'name': 'Turkish Lira'},
      { 'code': 'USD', 'name': 'United States Dollar'},
      { 'code': 'ZAR', 'name': 'South African Rand'},
    ];
    console.log(this.currencies);
  }

  onConvert(): void {
    if (this.rate){
      this.result = this.amount * this.rate;
    }
  }

  onChangeCurrency(): void {
    if (this.from && this.to) {
      this.currency.getLatestRate(this.from.code, this.to.code).subscribe(res => {
        this.rate = res.rates[this.to.code];
        console.log(res, this.rate);
      });
      if (this.amount) {
        this.onConvert();
      }
    }
  }
}
