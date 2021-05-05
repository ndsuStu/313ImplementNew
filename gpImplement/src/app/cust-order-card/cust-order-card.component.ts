import { Component, OnInit, Input } from '@angular/core';
import {Order} from '../CustomerAcct/order';

@Component({
  selector: 'app-cust-order-card',
  templateUrl: './cust-order-card.component.html',
  styleUrls: ['./cust-order-card.component.css']
})
export class CustJobCardComponent implements OnInit {

  @Input() order: Order = {orderNum:0,date:'',descr:'',amount: 0};

  constructor() { }

  ngOnInit(): void {
  }

}
