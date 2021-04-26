import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateCustAcctComponent } from './create-cust-acct/create-cust-acct.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustAcctComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
