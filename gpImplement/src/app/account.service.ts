import { Injectable } from '@angular/core';
import { Customer } from './CustomerAcct/customer';
import { Order } from './CustomerAcct/order';
import {Employee} from './EmployeeAcct/employee';

//Created by Evan Dramko
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  //=========================----------------------------================================
  //========================= Customer Storage and Login ================================
  //=========================----------------------------================================

  //Stores the next id number available for use
  private nextCustID: number = 4;

  getNextCustID(): number{
    return this.nextCustID;
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
    this.nextCustID++;
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

  //=========================----------------------------================================
  //========================= Employee Storage and Login ================================
  //=========================-------Dylan Schaefer-------================================

  //stores whether an employee has logged in.
  isEmployee: boolean = false;

  private nextEmpId: number = 3

  private employees: Employee[] = [
    {
      //To keep from differing in the service, leaving the first array index blank as well
      empId: 0,
      firstName: 'EMPTY',
      lastName: 'EMPTY'
    },
    {
      empId: 1,
      firstName: 'Lewis',
      lastName: 'Hamilton'
    },
    {
      empId: 2,
      firstName: 'Max',
      lastName: 'Verstappen'
    }

  ]

  getNextEmpId(){
    return this.nextEmpId;
  }

  addEmpAccount(employee: Employee){
    this.employees.push(employee);
    this.nextEmpId++;
  }

  getEmpAccount(index: number){
    return this.employees[index]
  }

}
