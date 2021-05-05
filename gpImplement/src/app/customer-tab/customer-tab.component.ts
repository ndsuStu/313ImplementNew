import { Component, Input, OnInit } from '@angular/core';
import {ViewControlService} from '../view-control.service';
import {AccountService} from "../account.service";
import{Customer} from "../CustomerAcct/customer";

@Component({
  selector: 'app-customer-tab',
  templateUrl: './customer-tab.component.html',
  styleUrls: ['./customer-tab.component.css']
})
export class CustomerTabComponent implements OnInit {

  customers:Customer[] = [];
  @Input() loggedInNum: number = -1;

  constructor(private viewControl : ViewControlService, private accountService: AccountService ) { }

  ngOnInit(): void {
    this.customers = this.accountService.customers;
    this.loggedInNum = this.viewControl.isCust;
  }

}
