import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../shared/exchange.service';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.scss']
})
export class ConvertorComponent implements OnInit {

  public exchangeResult: any;
  public newResult: string;

  constructor(private exchangeService: ExchangeService) {

   }

  ngOnInit() {
   this.exchangeService.getExchangerate().subscribe((result:any) => {
     console.log(result);
     this.exchangeResult = JSON.stringify(result);
    });
    console.log(this.exchangeResult);
  // this.newResult = JSON.parse(this.exchangeResult);
  }

}
