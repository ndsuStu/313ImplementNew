import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateCustAcctComponent } from './create-cust-acct/create-cust-acct.component';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatCardModule} from '@angular/material/card';
import { SearchFormComponent } from './search-form/search-form.component';
import { TabberComponent } from './tabber/tabber.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { ConnectingService } from './connecting.service';
import { EditComponent } from './edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    TabberComponent,
    EditComponent,
    CreateCustAcctComponent
    
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [ConnectingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
