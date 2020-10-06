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
  amount: any;
  countries: any[];
  currencies: any[];

  constructor(private currency: CurrencyService) {}

  ngOnInit(): void {
    this.currency.getCurrencies().subscribe( res => {
      if (res.success) {
        const toArray = (obj) => Object.keys(obj).map(key => {
          return {'code': key, 'name': obj[key]};
        });
        this.currencies = toArray(res.currencies);
        this.from = this.currencies[0];
        this.to = this.currencies[1];
      }
    });
    this.currency.latest().subscribe(res => {
      console.log(res);
    });
  }

  onConvert(): void {
    if (this.from && this.to) {}
    this.currency.convert(this.from.code, this.to.code, this.amount).subscribe(res => {
      // console.log(res);
    });
    this.currency.liveRate(this.from.code, this.to.code).subscribe(res => {
      // console.log(res);
    });
  }
}
