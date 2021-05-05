import { Component, Input, OnInit } from '@angular/core';
import {Customer} from "../CustomerAcct/customer";

@Component({
  selector: 'app-cust-acct-card',
  templateUrl: './cust-acct-card.component.html',
  styleUrls: ['./cust-acct-card.component.css']
})
export class CustAcctCardComponent implements OnInit {

  @Input() customer:Customer = {custId:-1,firstName:"A",lastName:"A",orders:[], cardNumber:"xx",unpaidBalance:0}
  @Input() custNum: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

}
