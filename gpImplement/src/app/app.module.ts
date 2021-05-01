import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateCustAcctComponent } from './create-cust-acct/create-cust-acct.component';
import { GeneralTabComponent } from './general-tab/general-tab.component';
import { EmployeeTabComponent } from './employee-tab/employee-tab.component';
import { CustomerTabComponent } from './customer-tab/customer-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustAcctComponent,
    GeneralTabComponent,
    EmployeeTabComponent,
    CustomerTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
