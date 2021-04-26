import { Injectable } from '@angular/core';
import { Customer } from './CustomerAcct/customer';
import { Order } from './CustomerAcct/order';

//Created by Evan Dramko
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  //stores whether an employee has logged in.
  isEmployee: boolean = false;

  //=========================----------------------------================================
  //========================= Customer Storage and Login ================================
  //=========================----------------------------================================

  //Stores the next id number available for use
  private nextID: number = 4;

  getNextID(): number{
    return this.nextID;
  }

  //this array holds all customers in sorted order by last name (Note that is alphabetical to begin with)
  private customers: Customer[] = [
    {
      //THIS OBJECT IS A BLANK OBJECT, SIMPLY HERE TO ALLOW FOR EASE OF ACCESS IN THE ARRAY
      custId: 0,
      firstName: "BLANK",
      lastName: "BLANK",
      orders: [],
      cardNumber: "BLANK",
      unpaidBalance: 0
    },
    {
      custId: 1,
      firstName: "Frodo",
      lastName: "Baggins",
      orders: [],
      cardNumber: "0123456789012345",
      unpaidBalance: 0
    }, 
    {
      custId: 2,
      firstName: "Dalinar",
      lastName: "Kholin",
      orders: [],
      cardNumber: "1234567890123456",
      unpaidBalance: 0
    }, 
    {
      custId: 3,
      firstName: "Luke",
      lastName: "Skywalker",
      orders: [],
      cardNumber: "2345678901234567",
      unpaidBalance: 0
    }
  ];

  addCustAcct(cust: Customer){
    this.customers.push(cust);
    this.nextID++;
  }

  //Just your classic accessor
  getCustomerAt(index: number){
    return this.customers[index];
  }

  /** Add an order to a customer's account
   * pass: customer_id, the order object to be added
   */
  addCustOrder(id: number, ord: Order){
    this.customers[id].orders.push(ord);
  }


}
