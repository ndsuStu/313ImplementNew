import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';
import {Employee} from '../EmployeeAcct/employee';
import {Customer} from '../CustomerAcct/customer'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: Employee[] = [];
  customerList: Customer[] = [];

  employee?: Employee;

  editDate: boolean = false;
  datesVar: number = 0;
  datesArray: number[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getEmployees();
    this.getCustomers();
    this.createDates();
  }

  getEmployees(){
    for(let i = 1; i < (this.accountService.getNextEmpId() - 1); i++){
      this.employeeList.push(this.accountService.getEmpAccount(i))
  }
}

  getCustomers(){
    for(let i = 1; i < (this.accountService.getNextCustID() - 1); i++){
      this.customerList.push(this.accountService.getCustomerAt(i));
  }
}

createDates(){
  for (this.datesVar = 1; this.datesVar < 31; this.datesVar++) {
    this.datesArray.push(this.datesVar);
  }
}

onPress(){
  this.editDate = !this.editDate;
}

}
